export const stepOneFields = [
  {
    name: 'desiredSector',
    type: 'dropdown',
    options: [
      { value: 'sector1', display: 'Sector 1' },
      { value: 'sector2', display: 'Sector 2' },
    ],
    label: 'בחר סקטור מיועד',
  },
  {
    name: 'desiredRole',
    type: 'dropdown',
    options: [
      { value: 'role1', display: 'Role 1' },
      { value: 'role2', display: 'Role 2' },
    ],
    label: 'בחר תפקיד מיועד',
  },
  {
    name: 'hearAboutUs',
    type: 'radio',
    options: [
      { value: 'option1', display: 'אפשרות 1' },
      { value: 'option2', display: 'אפשרות 2' },
      { value: 'option3', display: 'אפשרות 3' },
    ],
    label: 'היכן נחשפת למשרה או לעבודה באסותא?',
  },
  {
    name: 'workedBefore',
    type: 'radio',
    options: [
      { value: 'yes', display: 'כן' },
      { value: 'no', display: 'לא' },
    ],
    label: 'האם עבדת באסותא בעבר?',
  },

  {
    name: 'familyCloseness',
    type: 'radio',
    options: [
      { value: 'yes', display: 'כן' },
      { value: 'no', display: 'לא' },
    ],
    label: 'האם הנך בעל קרבה משפחתית לעובד אסותא?',
  },
];

export const stepTwoFields = [
  {
    name: 'firstName',
    type: 'text',
    label: 'שם פרטי',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'שם משפחה',
  },
  {
    name: 'firstNameEnglish',
    type: 'text',
    label: 'שם פרטי באנגלית',
  },
  {
    name: 'lastNameEnglish',
    type: 'text',
    label: 'שם משפחה באנגלית',
  },
  {
    name: 'id',
    type: 'text',
    label: 'תעודת זהות',
  },
  {
    name: 'gender',
    type: 'radio',
    options: [
      { value: 'male', display: 'זכר' },
      { value: 'female', display: 'נקבה' },
      { value: 'other', display: 'לא מעוניין לפרט' },
    ],
    label: 'מין',
  },
  {
    name: 'countryOfBirth',
    type: 'text',
    label: 'ארץ לידה',
  },
  {
    name: 'immigrationYear',
    type: 'number',
    label: 'שנת עלייה',
  },
  {
    name: 'street',
    type: 'text',
    label: 'רחוב',
  },
  {
    name: 'houseNumber',
    type: 'text',
    label: 'בית/דירה',
  },
  {
    name: 'zipCode',
    type: 'text',
    label: 'מיקוד',
  },
  {
    name: 'mobilePhone',
    type: 'text',
    label: 'טלפון נייד',
  },
  {
    name: 'additionalPhone',
    type: 'text',
    label: 'טלפון נוסף (אופציונאלי)',
  },
  {
    name: 'email',
    type: 'text',
    label: 'כתובת דוא"ל',
  },
  {
    name: 'carOwner',
    type: 'radio',
    options: [
      { value: true, display: 'כן' },
      { value: false, display: 'לא' },
    ],
    label: 'בעל רכב',
  },
  {
    name: 'hasDrivingLicense',
    type: 'radio',
    options: [
      { value: true, display: 'כן' },
      { value: false, display: 'לא' },
    ],
    label: 'רישיון נהיגה',
  },
];
