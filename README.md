# 2019 NAVER CAMPUS HACKDAY WINTER

## 주제선정 배경

- 항공권 로그를 활용해 여정별 관련 명소, 호텔, 투어 등의 여행 관련된 정보를 추천하고 공유하는 서비스 개발

## 개발 요구사항 (필수)

- 항공권 로그 데이터, 여행관련 데이터 저장
- 저장된 로그데이터를 기반으로 여정별 추천 로직 개발
- 추천 서비스 선택, 공유 기능

## 개발 요구사항 (선택)

- 필수기능 외에 구현해보고 싶은 기능이나 고도화 해보고 싶은 기술이 있으면 자유롭게 적용가능

## Role

- Front-end
- Back-end
- Full-stack developer
- Technology
- Node.js, React, React Native 등 자유롭게 선택 가능

## 개발언어

- Javascript, Typescript 등 자유롭게 선택가능

## 기타사항

- Language, Framework 선택 자유
- 각종 오픈소스 라이브러리 사용 가능
- 개발에 필요한 로그 데이터 제공 (세부적인 내용 자유롭게 구현 가능)

<hr/>

## Getting Started

- Make `.env` file in `server/`

  ```
  DB_URI=
  DB_NAME=
  NODE_ENV=development
  ```

- Run the App

  ```
  $ npm install
  $ npm start
  ```


## Memo

- stream

  > 핵데이에서는 동기식 파일 읽기로 구현했었음
  >
  > ```javascript
  > fs.readFile('file.txt', (err) => {
  > })
  > ```
  - but 대용량 파일의 경우에는, 파일 전체 로드될 때까지 기다릴 필요없이 일부만 --> stream
