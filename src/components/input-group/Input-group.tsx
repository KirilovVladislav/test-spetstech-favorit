import styles from './Input-group.module.css';

type Props = {
  value: string;
  handleChange: (value: string) => void;
  label: string;
  type?: string;
  [key: string]: any;
};

export function InputGroup({
  value,
  handleChange,
  label,
  type,
  ...props
}: Props) {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
        id={label}
        type={type}
        required
        {...props}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
