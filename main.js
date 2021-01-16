const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },


{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },





];









function App() {
  const [volume, setvolume] = React.useState(1);
  const [recording, setrecording] = React.useState("");
  const playrecording = () => {
    let index = 0;
    let recordarr = recording.split(' ')
    const interval = setInterval(() => {
      const audiotag = document.getElementById(recordarr[index]);


      audiotag.volume = volume;
      audiotag.currentTime = 0;
      audiotag.play();

      index++;
    }, 300);
    setTimeout(() => {
      clearInterval(interval)
    }, 300 + recordarr.length - 1);
  }

  return ( <
    div className = "container min-vh-100 bg-info" >
    <
    h2 className = "text-center p-5" > Drum Machine < /h2> {
      bankOne.map(item => ( <
        Pad key = {
          item.id
        }
        item = {
          item
        }
        volume = {
          volume
        }
        setrecording = {
          setrecording
        }
        />
      ))
    } <
    br / >
    <
    h4 className="text-center" > volume < /h4> <
    input type = "range"
    min = "0"
    max = "1"
    onChange = {
      e => setvolume(e.target.value)
    }
    value = {
      volume
    }
    className = "w-50 text-center"
    step = "0.01" /
    >
    <
    h3 > {
      recording
    } < /h3> {
      recording &&
        <
        >
        <
        button onClick = {
          playrecording
        }
      className = "btn btn-success" > play < /button> <
        button onClick = {
          () => setrecording('')
        }
      className = "btn btn-danger" > clear < /button> <
        />
    } <
    /div>
  );
}

function Pad({
  item,
  volume,
  setrecording
}) {
  const [active, setactive] = React.useState(false)
  React.useEffect(() => {
    document.addEventListener('keydown', handlekeypress);
    return () => {
      document.removeEventListener('keydown', handlekeypress);
    }
  }, [])
  const handlekeypress = (e) => {
    if (e.keyCode === item.keyCode) {
      playSound();
    }
  }

  const playSound = () => {
    const audiotag = document.getElementById(item.keyTrigger);
    setactive(true);
    setTimeout(() => setactive(false), 400);
    audiotag.volume = volume;
    audiotag.currentTime = 0;
    audiotag.play();
    setrecording(prev => prev + item.keyTrigger + "");

  };
  return ( <
    div onClick = {
      playSound
    }
    className = {
      `btn btn-secondary p-4 m-3 ${active && "btn-warning"}`
    } >
    <
    audio className = "item"
    id = {
      item.keyTrigger
    }
    src = {
      item.url
    }
    /> {
      item.keyTrigger
    } <
    /div>
  );
}







ReactDOM.render( < App / > , document.getElementById('app'));
