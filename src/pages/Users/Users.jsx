import { UsersList } from "../../components/UsersList/UsersList";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { fetchData } from "../../services/API";
import Notiflix from "notiflix";
import { onLoading, onLoaded } from "../../helpers/Loader/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const limit = 8;

  function onClick(arg) {
    arg === "btn__loadMore" && setPage(page + 1);
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchData(
          `/api/v1/users?page=${page}&limit=${limit}`
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
  }, [page]);

  return (
    <>
      {isLoading ? onLoading() : onLoaded()}
      {error && Notiflix.Notify.warning("Whoops, something went wrong")}

      {users?.length > 0 && !error && (
        <>
          <UsersList users={users}/>
          {(data?.length !== 0 || data?.length === limit) && (
            <Button
              text={"load more"}
              place={"btn__loadMore"}
              onClick={() => onClick}
            />
          )}
        </>
      )}
    </>
  );
};

export default Users;
