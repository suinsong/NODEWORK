// 모듈이 클래스
module.exports = function(app) {

	// 요청:클라이언트의 여러정보가 담긴 객체
	// 클라이언트의 질의어 반응:클라이언트에게 보낼 객체
	app.get('/hello', function(req, res) {
		res.send("안녕하세요");

	})

	app.get('/add', function(req, res) {
		res.send("덧셈결과:"(30 + 40))
	})

	app.get('/add/hello', function(req, res) {

		res.send("덧셈과 Hello")

	})

	app.get('/welcome', function(req, res) {
		// render는 views/hello.ejs파일을 찾고, 열어서
		// 어떤 데이터를 hello.ejs파일에 입혀서 클라이언트에서 보내는 역할을 함

		res.render('hello', {
			welcome : '우리집에 오신 것을 환영합니다'
		})
	})

	// localhost:3000/welcome/hong/114/30
	app.get('/welcome/:name/:tel/:age', function(req, res) {
		// 리퀘스트에서 파람스라는 서브 객체를 추출하고,
		// 서브 객체에서 name 변수 값을 추출하여
		// var name변수에 저장한다
		var name = req.params.name;
		var tel = req.params.tel;
		var age = req.params.age;

		res.write('name:' + name +'\n')
		res.write('tel:' + tel+'\n')
		res.end('age:' + age) // 마지막엔 무조건 ★★★END★★★★!!!!!
		
		// 한 줄만 보낼때는 그냥 ★★★★★SEND★★★★★!!!!!!!
		// 줄바꿈표시는 '\n'하면 됨 
	})

}