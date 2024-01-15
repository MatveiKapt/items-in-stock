const store = [];

const sortByDate = (store) => {
  return store.sort((a, b) => moment(a.date, 'DD.MM.YYYY HH:mm:ss') - moment(b.date, 'DD.MM.YYYY HH:mm:ss'));
}

const updateStore = ({name, price, date}) => {
  store.push(
    {
      name: name,
      price: price,
      date: date,
    }
  );
};

export {store, updateStore, sortByDate};