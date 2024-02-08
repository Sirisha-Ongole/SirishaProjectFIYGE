import React from 'react';
import ReactDOM from 'react-dom';

export default function FormUI() {
const formData ={ "name": "formName", "title": "Registration form", "description": "simple JFG example.", "method": "post", "action": "http://leomoon.com", "properties": { "firstName": { "type": "input", "title": "First name", "name":"firstName", "value": "test", "required": true, "onChange":"console.log(this.value)" }, "lastName": { "type": "input", "title": "Last name", "name":"lastName", "disabled": true }, "age": { "type": "number", "title": "Age", "name":"age" }, "bio": { "type": "input", "title": "Bio", "name":"bio", "placeholder":"Biography" }, "password": { "type": "password", "title": "Password", "name":"password", "min": 3 }, "language": { "type": "select", "title": "Language", "name":"lang", "options": {"en":"English", "fa":"Farsi", "de":"German" } }, "submit": { "type": "submit", "title": "Save Form", "name":"submit" } } }
const renderField = ({ type, title, name, ...otherProps }) => {
    switch (type) {
    case 'input':
        return (
        <div key={name} className="form-group">
            <label htmlFor={name}>{title}</label>
            <input type="text" id={name} name={name} {...otherProps} />
        </div>
        );
    case 'number':
        return (
          <div key={name} className="form-group">
            <label htmlFor={name}>{title}</label>
            <input type="number" id={name} name={name} {...otherProps} />
          </div>
        );
    case 'password':
        return (
          <div key={name} className="form-group">
            <label htmlFor={name}>{title}</label>
            <input type="password" id={name} name={name} {...otherProps} />
          </div>
        );
    case 'select':
        return (
        <div key={name} className="form-group">
            <label htmlFor={name}>{title}</label>
            <select id={name} name={name} {...otherProps}>
            {Object.entries(formData.properties.language.options).map(([value, label]) => ( 
                <option key={value} value={value}>
                {label}
                </option>
              ))}
            </select>
          </div>
        );
    default:
        return null;
    }
};
return (
    <form method={formData.method} action={formData.action}>
      <h2 className='mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl dark:text-white'>{formData.title}</h2>
      {formData.description && <p className='mb-4 text-4xl font-bold'>{formData.description}</p>}
      {Object.values(formData.properties).map(renderField)}
      <button type="submit">{formData.properties.submit.title}</button>
    </form>
  );
};

if (document.getElementById('home-main')) {
    ReactDOM.render(<FormUI />,document.getElementById('home-main'));
}