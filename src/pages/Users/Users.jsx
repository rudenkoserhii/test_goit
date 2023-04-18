import { UsersList } from "../../components/UsersList/UsersList";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { fetchData } from "../../services/API";
import Notiflix from "notiflix";
import { onLoading, onLoaded } from "../../helpers/Loader/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Filter } from "../../components/Filter/Filter";
import { Wrapper } from "./Users.styled";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("show_all");

  function filter(value) {
    if (value === "follow") {
      setValue(value);
      setSearchParams({ follow: false });
      setUsers([]);
      setPage(1);
    } else if (value === "followings") {
      setValue(value);
      setUsers([]);
      setPage(1);
      setSearchParams({ follow: true });
    } else if (value === "show_all") {
      setValue(value);
      setUsers([]);
      setPage(1);
      searchParams.delete("follow");
    }
  }

  const navigate = useNavigate();

  const limit = 8;

  function onClick(arg) {
    arg === "loadMore" && setPage(page + 1);
    arg === "back" && navigate("/");
  }
  searchParams.entries();
  useEffect(() => {
    (async () => {
      try {
        const { data } =
          searchParams === null
            ? await fetchData(`/api/v1/users?page=${page}&limit=${limit}`)
            : await fetchData(
                `/api/v1/users?page=${page}&limit=${limit}&${searchParams}`
              );
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
  }, [page, searchParams]);

  return (
    <>
      {isLoading ? onLoading() : onLoaded()}
      {error && Notiflix.Notify.warning("Whoops, something went wrong")}

      {users?.length > 0 && !error && (
        <>
          <Wrapper>
            <Button text={"back"} place={"btn__back"} onClick={onClick} />
            <Filter filter={filter} value={value} />
          </Wrapper>

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
