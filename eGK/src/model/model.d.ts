interface Egk {
  versicherter: EgkPatient;
  medikationsplan: MedikationsPlan;
}

interface Medikation {
  wirkstoff: Wirkstoff[];
  pharmazentralnummer: number;
  handelsname: string;
  darreichungsformCode: string;
  darreichungsformFreitext: string;
  dosierschemaMorgens: string;
  dosierschemaMittags: string;
  dosierschemaAbends: string;
  dosierschemaNachts: string;
  dosierschemaFreitext: string;
  dosiereinheitCode: string;
  dosiereinheitFreitext: string;
  hinweise: string;
  behandlungsgrund: string;
  zusatzzeile: string;
}

interface Rezeptur {
  freitext: string;
  zusatzzeile: string;
}

interface Freitextzeile {
  freitext: string;
}

interface EgkPatient {
  title: string;
  givenName: string;
  surname: string;
  birthday: Date;
  sex: Sex;
  zip: string;
  city: string;
  streetname: string;
  housenumber: string;
  healthInsuranceProviderNumber: string;
  healthInsuranceNumber: string;
  vorsatzwort: string;
  namenszusatz: string;
  healthInsuranceProviderName: string;
}

interface MedikationsPlan {
  patient: Patient;
  ersteller: Ersteller;
  parameter: Parameter;
  block: Block[];
  versionsnummer: string;
  instanzId: string;
  seitenzahl: number;
  gesamtseitenzahl: number;
  sprachLaenderkennzeichen: string;
}

interface Wirkstoff {
  wirkstoff: string;
  wirkstaerke: string;
}

interface Patient {
  vorname: string;
  nachname: string;
  versichertenId: string;
  geburtsdatum: string;
  geschlecht: string;
  titel: string;
  vorsatzwort: string;
  namenszusatz: string;
}

interface Ersteller {
  lebenslangeArztnummer: string;
  apothkenIdentifikationsnummer: string;
  krankenhausInstitutionskennzeichen: string;
  name: string;
  strasse: string;
  postleitzahl: string;
  ort: string;
  telefon: string;
  erstelldatum: Date;
  email: string;
}

interface Parameter {
  allergienUnvertraeglichkeiten: string;
  schwanger: string;
  stillend: string;
  gewicht: number;
  groesse: number;
  kreatininwert: number;
  parameterfreitext: string;
}

interface Block {
  medikationFreitextRezeptur: any[];
  zwischenueberschriftFreitext: string;
  zwischenueberschrift: string;
}

type Sex = "MALE" | "FEMALE";
