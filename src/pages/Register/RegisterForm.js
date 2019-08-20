import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, AsyncStorage } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "../../components/index";

class RegisterForm extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Formik
					initialValues={{ name: "faruk", email: "faruk@gmail.com", password: "bhathu123f", confirmPassword: "bhathu123f" }}
					onSubmit={this.clickRegister}
					validationSchema={Yup.object().shape({
						name: Yup.string().required("Name is required"),
						email: Yup.string()
							.email("Not valid email")
							.required("Email is required"),
						password: Yup.string()
							.min(6, "Password must be at least 6 characters")
							.required("Password is required"),
						confirmPassword: Yup.string()
							.oneOf([Yup.ref("password", null)], "Confirm Password must matched Password")
							.required("Confirm Password is required")
					})}
					render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid, isSubmitting }) => (
						<React.Fragment>
							<Input label="Email" autoCapitalize="none" value={values.email} onChange={setFieldValue} onTouch={setFieldTouched} name="email" error={touched.email && errors.email} />
							<Input
								label="Password"
								autoCapitalize="none"
								secureTextEntry
								value={values.password}
								onChange={setFieldValue}
								onTouch={setFieldTouched}
								name="password"
								error={touched.password && errors.password}
							/>
							<Input
								label="Confirm Password"
								autoCapitalize="none"
								secureTextEntry
								value={values.confirmPassword}
								onChange={setFieldValue}
								onTouch={setFieldTouched}
								name="confirmPassword"
								error={touched.confirmPassword && errors.confirmPassword}
							/>
							<Button aOpac={0.5} color1={"#fff"} color2={"#fff"} height={50} buttonText={"REGISTER"} onPress={handleSubmit} loading={isSubmitting} />
						</React.Fragment>
					)}
				/>
			</View>
		);
	}
}
export default RegisterForm;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 20
	}
});
