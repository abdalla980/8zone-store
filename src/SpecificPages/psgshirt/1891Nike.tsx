import { Navigationbar } from "../../NavigationBar/Navigationbar.tsx";
import styles from './1891Nike.module.css';
import { Footer } from "../../Footer/Footer.tsx";
import { useState } from "react";

export const PSG = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const productTitle = "PSG Shirt";
    const phoneNumber = "+971561105993";

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert("Please select a size before buying!");
            return;
        }
        const message = `Hi, I want to buy ${productTitle}, Size: ${selectedSize}`;
        const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className={styles.pageContainer}>
            <Navigationbar />
            <div className={styles.container}>
                <img src={"psg shirt .jpg"} className={styles.shirt} />
                <div className={styles.right}>
                    <h1 className={styles.title}>{productTitle}</h1>
                    <h1 className={styles.price}>90dhs</h1>
                    <h3 className={styles.checkout}>Shipping calculated at checkout</h3>

                    <h2>Select Size</h2>
                    <div className={styles.sizebuttons}>
                        {["S", "M", "L", "XL"].map((size) => (
                            <button key={size} onClick={() => setSelectedSize(size)} className={selectedSize === size ? styles.selected : ""}>
                                {size}
                            </button>
                        ))}
                    </div>

                    <div className={styles.buttonshard}>
                        <button onClick={handleBuyNow} className={styles.buynow}>Buy now via WhatsApp</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
