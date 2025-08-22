import { Navigationbar } from "../../NavigationBar/Navigationbar.tsx";
import styles from './1891Nike.module.css';
import { Footer } from "../../Footer/Footer.tsx";
import { useState } from "react";

export const Nike1891 = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const [currentImage, setCurrentImage] = useState(0);

    const productTitle = "Nike \"SmokingLirare\" Black";
    const phoneNumber = "+33 6 86 48 07 87";

    const images = [
        "1891shirt.jpg",
        "1891one.jpg",
        "1891two.jpg",
        "1891three.jpg",
        "1891four.jpg",
        "1891five.jpg",
    ];

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert("Please select a size before buying!");
            return;
        }
        const message = `Hi, I want to buy ${productTitle}, Size: ${selectedSize}`;
        const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.pageContainer}>
            <Navigationbar />
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <button onClick={prevImage} className={styles.arrow}>‹</button>
                    <img src={images[currentImage]} className={styles.shirt} />
                    <button onClick={nextImage} className={styles.arrow}>›</button>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.title}>{productTitle}</h1>
                    <h1 className={styles.price}>90dhs</h1>
                    <h3 className={styles.checkout}>Shipping calculated at checkout</h3>

                    <h2>Select Size</h2>
                    <div className={styles.sizebuttons}>
                        {["S", "M", "L", "XL", "2XL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={selectedSize === size ? styles.selected : ""}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <div className={styles.buttonshard}>
                        <button onClick={handleBuyNow} className={styles.buynow}>
                            Buy now via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
