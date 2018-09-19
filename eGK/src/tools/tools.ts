export class Tools {

  static formatDate(date) {
    let day = "0" + date.dayOfMonth;
    let month = "0" + date.monthValue;
    let year = date.year;
    return day.slice(-2) + "." + month.slice(-2) + "." + year;
  }

}
