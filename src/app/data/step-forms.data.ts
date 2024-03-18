import { FormField, FormGroupFields } from '../models/form-fields.model';
import { FieldType } from '../enums/field-types.enum';

// TODO: Move hardcoded texts to json file.
export const stepOneFields: FormField[] = [
  {
    name: 'desiredSector',
    type: FieldType.DROPDOWN,
    image: '../../../assets/images/select-arrow.svg',
    options: [
      { value: 'sector1', display: 'כח עזר' },
      { value: 'sector2', display: 'רופאים' },
      { value: 'sector3', display: 'פרא-רפואי' },
      { value: 'sector4', display: 'מנהל ומשק' },
      { value: 'sector5', display: 'מתנדבים' },
    ],
    label: 'בחר סקטור מיועד',
    errorMessage: '',
  },
  {
    name: 'desiredRole',
    type: FieldType.DROPDOWN,
    image: '../../../assets/images/select-arrow.svg',
    options: [
      { value: 'role1', display: 'אחראי/ת סניטרים' },
      { value: 'role2', display: 'גבסן/ית' },
      { value: 'role3', display: 'כח עזר' },
    ],
    label: 'בחר תפקיד מיועד',
    errorMessage: '',
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
    errorMessage: '',
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
    errorMessage: '',
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
    errorMessage: '',
  },
];

export const stepTwoFields: (FormField | FormGroupFields)[] = [
  {
    name: 'firstName',
    type: FieldType.TEXT,
    label: 'שם פרטי',
    errorMessage: '* יש למלא שם פרטי בעברית בלבד',
    validationRules: ['hebrew'],
  },
  {
    name: 'lastName',
    type: FieldType.TEXT,
    label: 'שם משפחה',
    errorMessage: '* יש למלא שם משפחה בעברית בלבד',
    validationRules: ['hebrew'],
  },
  {
    name: 'firstNameEnglish',
    type: FieldType.TEXT,
    label: 'שם פרטי באנגלית',
    errorMessage: '* יש למלא שם פרטי באנגלית',
    validationRules: ['english'],
  },
  {
    name: 'lastNameEnglish',
    type: FieldType.TEXT,
    label: 'שם משפחה באנגלית',
    errorMessage: '* יש למלא שם משפחה בעברית',
    validationRules: ['english'],
  },
  {
    name: 'id',
    type: FieldType.NUMBER,
    label: 'תעודת זהות',
    errorMessage: '* יש להזין מספר תעודת זהות כולל ספרת ביקורת',
    validationRules: ['israeliID'],
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
    errorMessage: '',
  },
  {
    name: 'countryOfBirth',
    type: FieldType.TEXT,
    label: 'ארץ לידה',
    errorMessage: '* יש לבחור ארץ לידה מהרשימה',
  },
  {
    name: 'immigrationYear',
    type: FieldType.NUMBER,
    label: 'שנת עלייה',
    errorMessage: '',
    validationRules: ['year'],
  },
  {
    group: 'address',
    fields: [
      {
        name: 'street',
        type: FieldType.TEXT,
        label: 'רחוב',
        errorMessage: '* נא להזין רחוב',
        validationRules: ['hebrew'],
      },
      {
        name: 'houseNumber',
        type: FieldType.NUMBER,
        label: 'בית/דירה',
        errorMessage: '* יש להזין מספר בית',
      },
    ],
  },
  {
    name: 'city',
    type: FieldType.TEXT,
    label: 'עיר',
    errorMessage: '* יש לבחור עיר מהרשימה',
    validationRules: ['hebrew'],
  },
  {
    name: 'zipCode',
    type: FieldType.NUMBER,
    label: 'מיקוד',
    errorMessage: '* נא להזין מיקוד תקין',
    validationRules: ['zipCode'],
  },
  {
    name: 'mobilePhone',
    type: FieldType.NUMBER,
    label: 'טלפון נייד',
    errorMessage: '* יש להזין מספר טלפון נייד תקין',
    validationRules: ['phoneNumber'],
  },
  {
    name: 'additionalPhone',
    type: FieldType.NUMBER,
    label: 'טלפון נוסף (אופציונאלי)',
    errorMessage: '* יש להזין מספר טלפון נייד תקין',
  },
  {
    name: 'email',
    type: FieldType.TEXT,
    label: 'כתובת דוא"ל',
    errorMessage: '* יש להזין כתובת דואר אלקטרוני',
    validationRules: ['email'],
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
    errorMessage: '',
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
    errorMessage: '',
  },
];
