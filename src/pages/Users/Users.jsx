import { UsersList } from "../../components/UsersList/UsersList";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { fetchData } from "../../services/API";
import Notiflix from "notiflix";
import { onLoading, onLoaded } from "../../helpers/Loader/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Filter } from "../../components/Filter/Filter";
import {Wrapper} from './Users.styled';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(null);

function filter(value) {
console.log(value)
if (value === 'follow') {
setUsers([]);
setPage(1);
setSearch(false);
setSearchParams({'follow': false});
} else if (value === 'followings') {
setUsers([]);
setPage(1);
setSearch(true);
setSearchParams({'follow': true});
} if (value === 'show_all') {
setUsers([]);
setPage(1);
setSearch(null);
searchParams.delete('follow');
}
}

  const navigate = useNavigate();

  const limit = 8;

  function onClick(arg) {
    arg === "loadMore" && setPage(page + 1);
    arg === "back" && navigate("/");
  }

// const url = search === null ? `/api/v1/users?page=${page}&limit=${limit}` : ({`/api/v1/users?page=${page}&limit=${limit}`, &follow=${search}});

  useEffect(() => {
    (async () => {
      try {
        const { data } = search === null ? await fetchData(`/api/v1/users?page=${page}&limit=${limit}`) : await fetchData(`/api/v1/users?page=${page}&limit=${limit}&${searchParams}`);
        setData(data);
        setUsers((prev) => [...prev, ...data]);
        if (!data) {
          return Notiflix.Notify.warning("Whoops, something went wrong 404");
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, search, searchParams]);

  return (
    <>
      {isLoading ? onLoading() : onLoaded()}
      {error && Notiflix.Notify.warning("Whoops, something went wrong")}

      {users?.length > 0 && !error && (
        <>
          <Wrapper><Button text={"back"} place={"btn__back"} onClick={onClick} />
<Filter filter={filter} /></Wrapper>

          <UsersList users={users} />
          {(data?.length !== 0 || data?.length === limit) && (
            <Button
              text={"load more"}
              place={"btn__loadMore"}
              onClick={onClick}
            />
          )}
        </>
      )}
    </>
  );
};

export default Users;
