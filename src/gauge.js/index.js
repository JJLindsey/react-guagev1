import GuageChart from 'react-gauge-chart';
 
 export default function Guage() {
   return (
     <div>
        <GuageChart id='guage-chart2' 
            nrOfLevels={30} 
            arcWidth={0.3}
            percent={0.70}
            //arcsLength={[0.5, 0.2, 0.3]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            arcPadding={0.05}
        />
     </div>
   )
 }
 


