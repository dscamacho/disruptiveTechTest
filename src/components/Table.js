import './App.css';
import CryptoRow from './CryptoRow';

function Table() {
    return(
        <div className="table">
            <table>
                <tr>
                    <th>ASSET</th>
                    <th>PRICE (USD)</th>
                    <th>Change VS. USD (1H)</th>
                    <th>CHANGE VS USD (24)</th>                    
                    <th>7 DAY TREND</th>
                    <th>REPORTED MARKETCAP</th>
                    <th>REAL VOLUME (24H)</th>
                    <th>CHANGE VS USD (7D)</th>
                    <th>CHANGE VS USD (30D)</th>
                    <th>CHANGE VS USD (YTD)</th>
                    <th>SECTOR</th>
                </tr>   
                    <CryptoRow 
                        assetName="Bitcoin"                    
                        price="Number"
                        changeVsUSD1h="String"
                        changeVsUSD24h="String"
                        sevenDayTrend="Image"
                        reportedMarketCap="String"
                        realVolume="String"
                        changeVsUSD7d="String"
                        changeVsUSD30d="String"
                        changeVsUSDYTD="String"
                        sector="String"/>

                    <CryptoRow 
                        assetName="Ethereum"
                        price="Number"
                        changeVsUSD1h="String"
                        changeVsUSD24h="String"
                        sevenDayTrend="Image"
                        reportedMarketCap="String"
                        realVolume="String"
                        changeVsUSD7d="String"
                        changeVsUSD30d="String"
                        changeVsUSDYTD="String"
                        sector="String"/>

                    <CryptoRow 
                        assetName="Cardano"
                        price="Number"
                        changeVsUSD1h="String"
                        changeVsUSD24h="String"
                        sevenDayTrend="Image"
                        reportedMarketCap="String"
                        realVolume="String"
                        changeVsUSD7d="String"
                        changeVsUSD30d="String"
                        changeVsUSDYTD="String"
                        sector="String"/>                
            </table>
        </div>
    )
};

export default Table;