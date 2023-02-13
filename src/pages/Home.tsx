import React from 'react';

import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { Categories, Sort, Pagination, SneakersBlock, Skeleton } from '../components'

import '../scss/app.scss';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectSneakersData } from '../redux/sneakers/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchSneakers } from '../redux/sneakers/asyncActions';

const Home: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isMounted = React.useRef(false);
  // const isSearch = React.useRef(false);

  const { items, status } = useSelector(selectSneakersData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getSneakers = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchSneakers({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // // Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     };

  //     const queryString = qs.stringify(params, { skipNulls: true });

  //     navigate(`/?${queryString}`);
  //   }

  //   if (!window.location.search) {
  //     dispatch(fetchSneakers({} as SearchSneakersParams))
  //   }
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    getSneakers();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);


  // //Парсим параметры при первом рендере
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchSneakersParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(setFilters({
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       searchValue: params.search,
  //       sort: sort || sortList[0],
  //     }));
  //   }
  //   isMounted.current = true
  // }, []);



  const sneakers = items.map((obj: any) => (
    <SneakersBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все кроссовки</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😰</h2>
          <p>К сожалению, не удалось получить кроссовки. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : sneakers}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;