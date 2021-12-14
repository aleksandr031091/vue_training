export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Пожалуйста заполните это поле",
});

export const charMaxLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Вы превысили лимит",
});

export const charMinLimit = (limit) => (value) => ({
  hasPassed: value.length >= limit,
  message: "Минимальное колличество символов должно быть 5",
});

export const emailValidate = (value) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9_.-]+$/.test(value),
  message: "email error",
});

export const passwordalidate = (value) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\b]).{7,256}$/.test(value),
  message: "must have at least one character and one letter ",
});
