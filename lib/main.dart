import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bucin App',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int index = 0;

  void next() {
    setState(() {
      index += 1;
    });
  }

  List<Widget> intro() {
    return [
      Text(
        'Halo Vidya!!',
        style: TextStyle(fontSize: 26, fontWeight: FontWeight.w700),
      ),
      Container(height: 18),
      Text(
        'Klik Tombol dibawah untuk mulai :)',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('Klik Akuu'),
      ),
    ];
  }

  List<Widget> part1() {
    return [
      Text(
        'Oke.. tarik nafas.. siap..',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('Siap!'),
      ),
    ];
  }

  List<Widget> part2() {
    return [
      Text(
        'Coba jawab pertanyaan berikut',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 12),
      Text(
        'Apakah kamu sayang sama Alif?',
        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w300),
      ),
      Container(height: 32),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () => next(),
            child: Text('Tentu Saja Ya!'),
          ),
          Container(width: 12),
          ElevatedButton(
            onPressed: null,
            child: Text('Tidak :('),
          ),
        ],
      ),
    ];
  }

  List<Widget> part3() {
    return [
      Text(
        'Alif juga sayang kamu 😘',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('Yeay 🥰'),
      ),
    ];
  }

  List<Widget> part4() {
    return [
      Text(
        'Pertanyaan berikutnya..',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 12),
      Text(
        'Apakah kamu kangen sama aku?',
        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w300),
      ),
      Container(height: 32),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () => next(),
            child: Text('Kangen Bangettt!'),
          ),
          Container(width: 12),
          ElevatedButton(
            onPressed: null,
            child: Text('Ga sih..'),
          ),
        ],
      ),
    ];
  }

  List<Widget> part5() {
    return [
      Text(
        'Aku juga kangen kamu 😘',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('senanggg! 🥰'),
      ),
    ];
  }

  List<Widget> part6() {
    return [
      Text(
        'Jadi gini, aku punya pantun',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('Apatuh..'),
      ),
    ];
  }

  List<Widget> part7() {
    return [
      Text(
        'Beli jus buah pepaya, Bikin roti pake selai srikaya!',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 32),
      ElevatedButton(
        onPressed: () => next(),
        child: Text('Cakep'),
      ),
    ];
  }

  List<Widget> part8() {
    return [
      Text(
        'Pusing mau nikah itu biasa, vidya semangat terus yaa!',
        style: TextStyle(fontSize: 18),
      ),
      Container(height: 12),
      Stack(
        children: [
          Text('Loading..'),
          Image.asset('images/giphy.webp', height: 180)
        ],
      ),
    ];
  }

  List<Widget> selectContents() {
    switch (index) {
      case 0:
        return intro();
      case 1:
        return part1();
      case 2:
        return part2();
      case 3:
        return part3();
      case 4:
        return part4();
      case 5:
        return part5();
      case 6:
        return part6();
      case 7:
        return part7();
      case 8:
        return part8();
      default:
        index = 0;
        return intro();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: AnimatedSwitcher(
          duration: Duration(milliseconds: 700),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: selectContents(),
          ),
        ),
      ),
    );
  }
}
