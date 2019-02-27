import {
  CHANGE_LANG
} from 'Constants/actionTypes';
export const changeLang = (lang)=>{
  localStorage.setItem('currentLanguage',lang);
  // console.log(CHANGE_LANG);
  return {
    type: CHANGE_LANG,
    payload: lang
  }
}
