// just sample implementation
// for practice of coding styles
// not a real 'best' copyFile implementation
// FIXME: najdite bug, napiste test, spravte fix

const fs = require("fs");
const EventEmiter = require("events");

function Copier (from, to) { 
    EventEmiter.call(this);
    this._from = from;
    this._to = to;
    this.copy =function copy(callback){

    let wasErr;

    const stream = fs.createReadStream(this._from);
    stream.on("data", (chunk) => {
      try {
        fs.appendFileSync(this._to, chunk); //FIXME
      } catch (err) {
        wasErr = true;
        this.emit("error", err);
      }
      this.emit("close");
    });
    stream.on("close", () => {
      !wasErr && this.emit("finish", {
        from: this._from,
        to: this._to
      });
    });
    stream.on("error", (err) => {
      this.emit("error", err);
    });
   if (callback){
      callback();
    }
  }

 
}
Copier.prototype = Object.create(EventEmiter.prototype);
Copier.prototype.constructor = Copier;
module.exports=Copier;





