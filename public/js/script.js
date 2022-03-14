
/*
// 현재 Path이름을 Body에 클래스로 삽입
function insertBodyClass(){
    const newPath = window.location.pathname;
    const arSplitUrl   = newPath.split("/");    //   "/" 로 전체 url 을 나눈다
    const nArLength     = arSplitUrl.length;
    const arFileName         = arSplitUrl[nArLength-1];   // 나누어진 배열의 맨 끝이 파일명이다
    const arSplitFileName     = arFileName.split(".");   // 파일명을 다시 "." 로 나누면 파일이름과 확장자로 나뉜다
    const sFileName = arSplitFileName[0];         // 파일이름
    const selectBody = document.querySelector('body');
    
    selectBody.classList.add(sFileName);
}

insertBodyClass();
*/