class SongNode {
    title: string;
    next: SongNode | null = null;
    prev: SongNode | null = null;

    constructor(title: string) {
        this.title = title;
    }
}

class Playlist {
    head: SongNode | null = null;
    tail: SongNode | null = null;
    current: SongNode | null = null;

    addSong(title: string) {
        const newSong = new SongNode(title);
        if (!this.head) {
            this.head = this.tail = this.current = newSong;
        } else {
            this.tail!.next = newSong;
            newSong.prev = this.tail;
            this.tail = newSong;
        }
    }


    playNext() {
        if (this.current?.next) {
            this.current = this.current.next;
        }
    }

    playPrevious() {
        if (this.current?.prev) {
            this.current = this.current.prev;
        }
    }



    repeatCurrent() {
        console.log("Repeating:", this.current?.title ?? "Nothing");
    }
    loopOnce() {
        if (this.current?.next) {
            this.current = this.current.next;
        } else {
            this.current = this.head;
        }
    }
    shuffle() {
        const songs: SongNode[] = [];
        let temp = this.head;
        while (temp) {
            songs.push(temp);
            temp = temp.next;
        }

        const randomIndex = Math.floor(Math.random() * songs.length);
        this.current = songs[randomIndex];
        console.log("Shuffled to:", this.current.title);
    }
    reverse() {
        let current = this.head;
        let temp: SongNode | null = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        this.current = this.head;
        console.log("Playlist reversed");
    }
    deleteCurrent() {
        if (!this.current) return;

        if (this.current.prev) this.current.prev.next = this.current.next;
        else this.head = this.current.next;

        if (this.current.next) this.current.next.prev = this.current.prev;
        else this.tail = this.current.prev;

        this.current = this.current.next ?? this.head;
        console.log("Current song deleted");
    }
    nowPlaying() {
        console.log("Now playing:", this.current?.title ?? "Nothing");
    }


    print() {
        let temp = this.head;
        let output = "";
        while (temp) {
            if (temp === this.current) {
                output += `[🎵 ${temp.title}] → `;
            } else {
                output += `${temp.title} → `;
            }
            temp = temp.next;
        }
        console.log(output + "null");
    }

}

const song = new Playlist()
console.log(song);

song.addSong("Sungba")
song.addSong("Fire1")
song.addSong("Fire2")
song.addSong("Fire3")
song.addSong("Fire4")

song.playNext()

song.print()