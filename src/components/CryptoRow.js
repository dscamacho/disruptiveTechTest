import React from "react";

function CryptoRow(props) {
    return (
        <tr>

            <td>
                {props.assetName}
            </td>
            <td>
                {props.price}
            </td>
            <td>
                {props.changeVsUSD1h}
            </td>
            <td>
                {props.changeVsUSD24h}
            </td>
            <td>
                {props.sevenDayTrend}
            </td>
            <td>
                {props.reportedMarketCap}
            </td>
            <td>
                {props.realVolume}
            </td>
            <td>
                {props.changeVsUSD7d}
            </td>
            <td>
                {props.changeVsUSD30d}
            </td>
            <td>
                {props.changeVsUSDYTD}
            </td>
            <td>
                {props.sector}
            </td>
        </tr>

    )
};

export default CryptoRow;