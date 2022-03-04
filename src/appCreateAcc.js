
export const Patterns = {
	firstName: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
	lastName: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
	companyName: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
	email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
	password: new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	),
	companyPassword: new RegExp(
			"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	),
};
