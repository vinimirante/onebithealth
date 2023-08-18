import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Share
} from "react-native";
import styles from "./style"

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.messageImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.messageImc}</Text>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.share}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}