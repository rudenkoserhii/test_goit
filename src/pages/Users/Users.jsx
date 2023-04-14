import { UsersList } from "../../components/UsersList/UsersList";
import { useEffect, useState } from "react";
import { Pagination } from '../../utils/pagination';
import { fetchData } from '../../services/API';
import { useSearchParams } from 'react-router-dom';
import Notiflix from "notiflix";
import { onLoading, onLoaded } from '../../helpers/Loader/Loader';

let page = 1;
let limit = 8;

const Users = () => {
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setSearchParams(searchParams);
  };

useEffect(() => {
    if (!page && !limit) {
      const params = { page: 1, limit };
      setSearchParams(params);
    }

    (async () => {
      try {
        const { users } = await fetchData(`/api/v1?${searchParams}`);
console.log(users)
        setUsers(users);
        if (!users) {
          return Notiflix.Notify.warning('Whoops, something went wrong 404');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams, setSearchParams]);

  return (
<>
          {isLoading ? onLoading() : onLoaded()}
          {error && Notiflix.Notify.warning('Whoops, something went wrong')}

          {users?.length > 0 && !error && (
<>
        <UsersList users={users} />
        <Pagination totalPage={'100'} changePage={setPage} />
</>
  )}
</>
);
          
};

export default Users;
