export const stepOneFields = [
  {
    name: 'desiredSector',
    type: 'dropdown',
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
    type: 'dropdown',
    options: [
      { value: 'role1', display: 'אחראי/ת סניטרים' },
      { value: 'role2', display: 'גבסן/ית' },
      { value: 'role3', display: 'כח עזר' },
    ],
    label: 'בחר תפקיד מיועד',
  },
  {
    name: 'hearAboutUs',
    type: 'radio',
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
    type: 'boolean',
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
    type: 'boolean',
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
    type: 'genderSelect',
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
    type: 'boolean',
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
    type: 'boolean',
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
