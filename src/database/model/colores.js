import mongoose from "mongoose";


const colorSchema = new mongoose.Schema({
    nombreColor: {
        type: String,
        required: true,
        minlength: 3, 
        maxlength: 30
    },
    codigoHexadecimal: {
        type: String,
        validate: {
            validator: function(value) {
                return !value || /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value);
            },
            message: props => `${props.value} no es un código hexadecimal válido`
        },
        default: null
    },
    codigoRGB: {
        type: String,
        validate: {
            validator: function(value) {
                return !value || /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*\d+(\.\d+)?\s*)?\)$/.test(value);
            },
            message: props => `${props.value} no es un código RGB válido`
        },
        default: null
    }
});

const Color = mongoose.model("Color", colorSchema);

export default Color;