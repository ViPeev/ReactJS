import { createContext, useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("firstName");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isNowSearching, setIsNowSearching] = useState(false);
  const [limit, setLimit] = useState(5);
  const [curPage, setCurPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllUsers(limit,curPage);
        setUsers(data.users);
        setPages(Math.ceil(data.count/limit));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [limit,curPage]);

  useEffect(() => {
    setFiltered(users);
  }, [users]);

  const submitSearch = (e) => {
    e.preventDefault();
    setIsNowSearching(true);
    setFiltered(() => {
      const data = search
        ? users
            .filter((u) =>
              u[filter].toLowerCase().includes(search.toLowerCase())
            )
        : users;
      return data;
    });
    setSearch("");
  };

  return (
    <DataContext.Provider
      value={{
        userId,
        users,
        filtered,
        search,
        filter,
        loading,
        isNowSearching,
        pages,
        curPage,
        limit,
        setLimit,
        setUserId,
        setFilter,
        submitSearch,
        setSearch,
        setUsers,
        setFiltered,
        setCurPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
