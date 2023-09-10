import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

function* workGetCatsFetch(): any {
  try {
    const cats: any = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats: any = yield cats.json();
    const formattedCatsShorted = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShorted));
  } catch (e) {

  }
}


function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga;