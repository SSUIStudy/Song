### GIT 협업 플로우 - Feature Branch Workflow


- 기능별 브랜치를 만들어 작업

- `master`브랜치는 배포용, 그 외 브랜치는 기능 및 수정

- 브랜치 생성시 의미 부여할 것  예) `login`, `issue` 등



1. 원격저장소 파일을 자신의 로컬 저장소에 복사

2. 브랜치 생성
```sh
$ git branch issue#190214
$ git checkout issue#190214

- 위 2개의 명령어 합할시 아래의 명령어 입력
$ git checkout -b issue#190214
```

![image](https://user-images.githubusercontent.com/43169339/52756824-01598a00-3046-11e9-8351-459f0ed90b24.png)

3. 작업 후 기능 브랜치를 원격저장소에 푸시
```sh
$ git add 작업한 파일
$ git commit -m "msg"

-u 옵션 : 기능 브랜치와 동일한 이름으로 원격저장소에 브랜치 추가
$ git push -u origin issue#190214

-u 옵션 연결 후 -u 없이 푸시 가능
$ git push origin issue#190214
```

![image](https://user-images.githubusercontent.com/43169339/52758695-9a8b9f00-304c-11e9-8be3-072ea2d28cb1.png)


4. 관리자에게 작업한 코드를 반영해달라고 요청(풀 리퀘스트)

![image](https://user-images.githubusercontent.com/43169339/52758673-8647a200-304c-11e9-8371-d1c47d57cd93.png)

![image](https://user-images.githubusercontent.com/43169339/52758661-79c34980-304c-11e9-8fbd-d5320441af97.png)

![image](https://user-images.githubusercontent.com/43169339/52758647-69ab6a00-304c-11e9-9cdc-1634f7399f18.png)

5. 풀 리퀘스트를 수용하기로 결정이 난 후 병합 작업 진행
   - 작업 진행시 `master` 브랜치의 내용이 최신이여야 함, 원격 저장소에 새로운 내용이 있다면 `master` 브랜치 최신화 시켜야 함
```sh
$ git checkout master
$ git fetch origin issue#190214
$ git merge origin/issue#190214
$ git push origin master
```

![image](https://user-images.githubusercontent.com/43169339/52758241-e50c1c00-304a-11e9-94e8-cad061db0ac0.png)

6. 병합 완료 후 원격저장소 브랜치 삭제
```sh
$ git push origin :issue#190214
```

   ![image](https://user-images.githubusercontent.com/43169339/52758382-5ea40a00-304b-11e9-98c0-621ce1521a02.png)

7. 프로젝트에 참여 하고 있는 개발자는 자신의 로컬 저장소 최신화 하여하 함.
```sh
$ git pull origin master
or
$ git fetch origin master
$ git rebase origin/master
```
![image](https://user-images.githubusercontent.com/43169339/52758519-e5f17d80-304b-11e9-8bff-2496e6f1705a.png)

8. 충돌 발생시

```sh
# 원격 저장소 커밋을 가져와서 로컬 master 브랜치와 병합 후 스테이징에 파일 추가 및 커밋, 푸쉬 
$ git fetch origin master
$ git merge origin/master
$ git add .
$ git commit -m "msg"
$ git push origin master
```

![image](https://user-images.githubusercontent.com/43169339/52831010-4b11a580-3116-11e9-8276-6b63480f9190.png)



참고사이트

https://lhy.kr/git-workflow

https://gmlwjd9405.github.io/2017/10/27/how-to-collaborate-on-GitHub-1.html