import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, AsyncStorage } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "../../components/index";

class LoginForm extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Formik
					initialValues={{ email: "faruk@gmail.com", password: "bhathu123f" }}
					onSubmit={this.clickLogin}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email("Not valid email")
							.required("Email is required"),
						password: Yup.string()
							.min(6)
							.required("Password is required")
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
							<Button aOpac={0.5} color1={"#fff"} color2={"#fff"} height={50} buttonText={"LOGIN"} onPress={handleSubmit} loading={isSubmitting} />
						</React.Fragment>
					)}
				/>
			</View>
		);
	}
}
export default LoginForm;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 20
	}
});
