import styles from './button.module.css';

interface ButtonsProps {
    label: string;
    onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonsProps) {
    return (
        <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
        </div>
    );
}
