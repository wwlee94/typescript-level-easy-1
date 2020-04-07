# Typescript 과제

keywords: `nodejs`, `typescript`, `express`

|이름|언어|난이도|브랜치 갯수|
|:-:|:-:|:-:|:-:|
|책 대여 시스템 만들기|`Typescript`, `nodejs`|EASY|4|

## 과제 설명

이 과제는 typescript를 이용한 restful 서버 개발 과제입니다. 책대여 시스템을 단계별로 작성해주시면 됩니다.

### level1

생성할 브랜치: `feature/typescript`

[Typescript](https://www.npmjs.com/package/typescript)를 설치하여 컴파일 환경을 작성하고, [nodemon](https://www.npmjs.com/package/nodemon)으로 코드 수정시 자동으로 서버가 재시동 되도록 해보세요.

코드 스타일은 구글 타입스크립트 스타일을 사용해보세요. [google/gts](https://www.npmjs.com/package/gts)

완전히 된 후에 풀리퀘스트를 만들어 코드리뷰를 요청해 보세요


### level2

생성할 브랜치: `feature/book`

mariadb 데이터베이스를 생성하고 책을 등록/수정 하는 컨트롤러를 구현해 보세요. 책은 이름, 저자, 등록일, 수정일을 가지고 있습니다.


### level3

생성할 브랜치: `feature/user`

유저를 생성하고, 로그인이 가능하도록 인증기능을 만들어 보세요. 유저는 이름과 비밀번호를 가지고 있습니다.


### level4

생성할 브랜치: `feature/rent`

유저가 책을 빌리는 관계를 만들어서 대여/반납 기능을 만들어 보세요. 대여라는 관계에는 사용자와 책을 이어주고, 대여일자와 반납일자가 기록되어야합니다.
