import React, { Component } from "react";
import Faq from "react-faq-component";
 
const data = {
    title: "FAQ",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Curabitur laoreet, mauris vel blandit ?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Curabitur laoreet, ?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
    ],
};
 
const styles = {
    bgColor: 'tranperent',
    titleTextColor: "#f9004d",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "#f9004d"
};
 
const config = {
    animate: true,
    // arrowIcon: "V",
};
 
export default class FAQ extends Component {
    render() {
        return (
            <section className="about-section aboutBG bg1">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-column  pull-right col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title" data-aos="fade-right">
                                    <span className="title">Frequently asked questions</span>
                                    <h2>Peaople's are<br></br>Asking<br></br><span>Questions frequently.</span></h2>
                                </div>
                                <br></br>
                                <div className="text" data-aos="fade-right">We are common people based in Uttarakhand. we are working to make society a better place to live. Educated, Free, and Proud Society. <br></br>We started our journey in 2002 by making a small group in Masi (Uttarakhand)</div>
                                <div className="text" data-aos="fade-right">We are common people based in Uttarakhand. we are working to make society a better place to live. Educated, Free, and Proud Society. <br></br>We started our journey in 2002 by making a small group in Masi (Uttarakhand)</div>
                            </div>
                        </div>
                        <div className="image-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <Faq data={data} styles={styles} config={config} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}