import React from 'react';
import styles from './FormControl.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
            {props.children}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError && styles.error)}>
//             {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
//             <textarea {...input} {...props}/>
//         </div>
//     )
// }
//
// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError && styles.error)}>
//             {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
//             <input {...input} {...props}/>
//         </div>
//     )
// }