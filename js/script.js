var music = [];
var currentTrack = {};
var trackCount = 0;
//0 = paused| 1 = playing
var currentStatus = 0

$(document).ready(function () {
    $.get("Song_Index.csv", function (data) {

        var allTextLines = data.split(/\r\n|\n/);

        for (var i = 1; i < allTextLines.length; i++) {
            var song = allTextLines[i].split(',');
            var m = {
                name: song[0],
                artist: song[1],
                album: song[2],
                art: song[3],
                file: song[4]
            };
            music.push(m);
        }
        currentTrack = new Audio("/music/" + music[0].file);

        $('#artist').text(music[0].artist);
        $('#song').text(music[0].name);
        $('#album').text(music[0].album);
        $('#album-art').attr('src', "../" + music[trackCount].art);

        $('#skip').on("click", function () {
            if (trackCount == 18) {
                trackCount = 0;
                currentTrack.pause();
                currentTrack = new Audio("/music/" + music[trackCount].file);
                currentTrack.play();
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_pause.png');
                $('#artist').text(music[trackCount].artist);
                $('#song').text(music[trackCount].name);
                $('#album').text(music[trackCount].album);
                $('#album-art').attr('src', "../" + music[trackCount].art);
            } else {
                trackCount++;
                currentTrack.pause();
                currentTrack = new Audio("/music/" + music[trackCount].file);
                currentTrack.play();
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_pause.png');
                $('#artist').text(music[trackCount].artist);
                $('#song').text(music[trackCount].name);
                $('#album').text(music[trackCount].album);
                $('#album-art').attr('src', "../" + music[trackCount].art);
            }
        });

        $('#back').on("click", function () {
            if (trackCount == 0) {
                trackCount = 18;
                currentTrack.pause();
                currentTrack = new Audio("/music/" + music[trackCount].file);
                currentTrack.play();
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_pause.png');
                $('#artist').text(music[trackCount].artist);
                $('#song').text(music[trackCount].name);
                $('#album').text(music[trackCount].album);
                $('#album-art').attr('src', "../" + music[trackCount].art);
            } else {
                trackCount--;
                currentTrack.pause();
                currentTrack = new Audio("/music/" + music[trackCount].file);
                currentTrack.play();
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_pause.png');
                $('#artist').text(music[trackCount].artist);
                $('#song').text(music[trackCount].name);
                $('#album').text(music[trackCount].album);
                $('#album-art').attr('src', "../" + music[trackCount].art);
            }
        });


        $('#play').on("click", function () {


            if (currentStatus == 0) {
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_pause.png');
                currentTrack.play();
                currentStatus = 1;
            } else {
                $('#play').attr('src', 'http://www.pandora.com/img/player-controls/btn_play.png');
                currentTrack.pause();
                currentStatus = 0;
            }

        });
    });
});