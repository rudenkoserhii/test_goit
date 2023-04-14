import { UsersList } from "../../components/UsersList/UsersList";
import { useEffect, useState } from "react";
// import { Pagination } from "../../utils/pagination";
import { Button } from "../../components/Button/Button";
import { fetchData } from "../../services/API";
import { useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";
import { onLoading, onLoaded } from "../../helpers/Loader/Loader";

let page = 1;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

// setSearchParams(`page=${page}&limit=8`)

  // const searchParams = { page, limit };
  //     setUrlParams(searchParams);

  // const setPage = () => {
  //   searchParams.set("page", page + 1);
  //   setSearchParams(searchParams);
  // };
// setSearchParams({'page': page, 'limit': '8'})

function onClick () {
console.log('page before'+page)
page++
console.log('page after'+page)
}

// const urlString = `page=${page}&limit=8`
// setSearchParams(urlString)

  useEffect(() => {
//     if (!page && !limit) {
// console.log(searchParams)
// console.log(searchParams)
//     }


    (async () => {
      try {
        const {data} = await fetchData(`/api/v1/users?${searchParams}`);
        setUsers(data);
        if (!data) {
          return Notiflix.Notify.warning("Whoops, something went wrong 404");
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams]);

  return (
    <>
      {isLoading ? onLoading() : onLoaded()}
      {error && Notiflix.Notify.warning("Whoops, something went wrong")}

      {users?.length > 0 && !error && (
        <>
          <UsersList users={users} />
          <Button text={'load more'} onClick={onClick} />
          {/* <Pagination totalPage={Math.ceil(users.length / limit)} changePage={setPage} /> */}
        </>
      )}
    </>
  );
};

export default Users;
