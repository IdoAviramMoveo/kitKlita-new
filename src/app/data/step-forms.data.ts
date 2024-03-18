import { FieldType } from '../enums/field-types.enum';

// TODO: Move hardcoded texts to json file.
export const stepOneFields = [
  {
    name: 'desiredSector',
    type: FieldType.DROPDOWN,
    image: './assets/images/select-arrow.svg',
    options: [
      { value: 'sector1', display: 'כח עזר' },
      { value: 'sector2', display: 'רופאים' },
      { value: 'sector3', display: 'פרא-רפואי' },
      { value: 'sector4', display: 'מנהל ומשק' },
      { value: 'sector5', display: 'מתנדבים' },
    ],
    label: 'בחר סקטור מיועד',
  },
  {
    name: 'desiredRole',
    type: FieldType.DROPDOWN,
    image: './assets/images/select-arrow.svg',
    options: [
      { value: 'role1', display: 'אחראי/ת סניטרים' },
      { value: 'role2', display: 'גבסן/ית' },
      { value: 'role3', display: 'כח עזר' },
    ],
    label: 'בחר תפקיד מיועד',
  },
  {
    name: 'hearAboutUs',
    type: FieldType.RADIO,
    options: [
      {
        value: 'option1',
        display: 'חברת השמה',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option2',
        display: 'אתר האינטרנט של אסותא',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option3',
        display: 'חבר/מכר',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option4',
        display: 'לוח דרושים',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option5',
        display: 'אחר',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
    ],
    label: 'היכן נחשפת למשרה או לעבודה באסותא?',
  },
  {
    name: 'workedBefore',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: 'yes',
        display: 'כן',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
      {
        value: 'no',
        display: 'לא',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
    ],
    label: 'האם עבדת באסותא בעבר?',
  },
  {
    name: 'familyCloseness',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: 'yes',
        display: 'כן',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
      {
        value: 'no',
        display: 'לא',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
    ],
    label: 'האם הנך בעל קרבה משפחתית לעובד אסותא?',
  },
];

export const stepTwoFields = [
  {
    name: 'firstName',
    type: FieldType.TEXT,
    label: 'שם פרטי',
  },
  {
    name: 'lastName',
    type: FieldType.TEXT,
    label: 'שם משפחה',
  },
  {
    name: 'firstNameEnglish',
    type: FieldType.TEXT,
    label: 'שם פרטי באנגלית',
  },
  {
    name: 'lastNameEnglish',
    type: FieldType.TEXT,
    label: 'שם משפחה באנגלית',
  },
  {
    name: 'id',
    type: FieldType.TEXT,
    label: 'תעודת זהות',
  },
  {
    name: 'gender',
    type: FieldType.GENDER_SELECT,
    options: [
      {
        value: 'male',
        display: 'זכר',
        image: '../../../assets/images/male-white.png',
        selectedImage: '../../../assets/images/male-blue.png',
      },
      {
        value: 'female',
        display: 'נקבה',
        image: '../../../assets/images/female-white.png',
        selectedImage: '../../../assets/images/female-blue.png',
      },
      { value: 'other', display: 'לא מעוניין/ת לפרט' },
    ],
    label: 'מין',
  },
  {
    name: 'countryOfBirth',
    type: FieldType.TEXT,
    label: 'ארץ לידה',
  },
  {
    name: 'immigrationYear',
    type: FieldType.NUMBER,
    label: 'שנת עלייה',
  },
  {
    name: 'street',
    type: FieldType.TEXT,
    label: 'רחוב',
  },
  {
    name: 'houseNumber',
    type: FieldType.TEXT,
    label: 'בית/דירה',
  },
  {
    name: 'zipCode',
    type: FieldType.TEXT,
    label: 'מיקוד',
  },
  {
    name: 'mobilePhone',
    type: FieldType.TEXT,
    label: 'טלפון נייד',
  },
  {
    name: 'additionalPhone',
    type: FieldType.TEXT,
    label: 'טלפון נוסף (אופציונאלי)',
  },
  {
    name: 'email',
    type: FieldType.TEXT,
    label: 'כתובת דוא"ל',
  },
  {
    name: 'carOwner',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: true,
        display: 'כן',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
      {
        value: false,
        display: 'לא',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
    ],
    label: 'בעל רכב',
  },
  {
    name: 'hasDrivingLicense',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: true,
        display: 'כן',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
      {
        value: false,
        display: 'לא',
        image: '../../../assets/images/unselected_box.svg',
        selectedImage: '../../../assets/images/selected_box.svg',
      },
    ],
    label: 'רישיון נהיגה',
  },
];
