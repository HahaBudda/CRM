
export const Patterns = {
	firstName: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
	lastName: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
	email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
	password: new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	),
};

export const ValidEmail= new RegExp('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$')
export const ValidFirstName=new RegExp(`^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$`)
export const ValidLastName=new RegExp(`^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$`)
export const ValidCompanyName=new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`)
export const ValidPassword=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
export const ValidRepeatPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')

// export  let signinData = {
// 	firstName: {
// 		value: "",
// 		isValid: false,
// 	},
// 	lastName: {
// 		value: "",
// 		isValid: false,
// 	},
// 	email: {
// 		value: "",
// 		isValid: false,
// 	},
// 	password: {
// 		value: "",
// 		isValid: false,
// 	},
// };
//
// export let loginData = {
// 	email: {
// 		value: "",
// 		isValid: false,
// 	},
// 	password: {
// 		value: "",
// 		isValid: false,
// 	},
// };