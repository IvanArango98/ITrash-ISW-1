import * as Yup from 'yup';

export const validate = Yup.object({
    email: Yup.string().email().required("Correo electronico es requerido."),
    password: Yup.string()
    .required("Contraseña es requerida.")
    .min(4, "Contraseña debe de contener más de 3 caracteres."),
})