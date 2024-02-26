
import LegendLabel from '../LegendLabel/LegendLabel';

const LegendLabelList = () => {
  return (
    <LegendLabel>
    
    <LegendLabel.LegentLabelItem legendColor='#3B81F6'>
        <p>Application Sent</p>
    </LegendLabel.LegentLabelItem>

    <LegendLabel.LegentLabelItem legendColor='#6366F1'>
        <p>Interviews</p>
    </LegendLabel.LegentLabelItem>

    <LegendLabel.LegentLabelItem legendColor='#05B6D3'>
        <p>Rejected</p>
    </LegendLabel.LegentLabelItem>

 </LegendLabel>
  )
}

export default LegendLabelList