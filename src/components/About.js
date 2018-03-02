import React, { Component } from 'react';
import Data from '../data/data.json';
import ShannelleImage from '../images/shannelle.jpg';
import MaddieImage from '../images/maddie.jpg';
import EmilyImage from '../images/emily.jpg';
import JenImage from '../images/jen.jpg';
import MariImage from '../images/mari.jpg';
import JamesImage from '../images/james.jpg';
import BenImage from '../images/ben.jpg';
import TJImage from '../images/tj.jpg';
import LewisImage from '../images/lewis.jpg';
import JoeImage from '../images/joe.png';

class About extends Component {
  render () {
    return (
      <div className='bio'>
        <div className='bio-svg'>
          <svg width='177px' height='41px' viewBox='0 0 177 41' version='1.1'>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Mr_Mrs' fillRule='nonzero'>
                <path d='M77.4037529,38 C79.2688384,35.9858344 80.9474154,33.9357015 82.5793652,31.8136342 C85.190485,28.4327134 87.6617233,24.9079235 89.6666903,21.275232 C91.252013,18.3618853 94.0962684,13.8659799 92.5575728,10.6648953 C91.4385215,8.32702452 88.3145032,8.83056592 86.6359263,10.4131246 C85.6567564,11.3123057 85.2371121,12.3553557 84.3045694,13.2545368 C83.8849251,13.6501765 77.8233971,4.15482433 71.2955978,7.85945036 C64.3947813,11.7439126 75.0257689,33.6119964 77.4037529,38 Z' id='Shape' fill='#F7D0CB' />
                <path d='M145.393201,25.0031668 C145.068024,24.9672907 144.696394,24.9314146 144.371218,24.8955385 C143.163419,24.7520342 142.048528,24.4291496 141.119452,23.7475041 C139.725839,22.742974 139.261301,21.0926745 139.958108,19.7652597 C140.283284,19.1912425 140.747822,18.7607296 141.444629,18.473721 C142.280797,18.0790842 143.163419,18.1508363 143.953133,18.5813493 C144.882209,19.0836143 145.486108,19.8011358 145.904193,20.5904095 C146.36873,21.5231874 146.508092,22.4918415 146.600999,23.4604955 C146.600999,23.675752 146.600999,23.8910084 146.600999,24.1421409 C146.786814,24.1421409 146.97263,24.178017 147.111991,24.178017 C147.855252,24.178017 148.552058,24.1421409 149.295319,24.1421409 C151.060563,24.1421409 152.407723,24.7161582 153.336798,25.8641926 C153.661975,26.2229533 153.894244,26.6893423 154.033605,27.1198552 C154.358782,28.1602614 154.358782,29.2365437 154.265874,30.2769499 C154.080059,31.9631254 153.84779,33.685177 153.615521,35.3713526 C153.522614,36.1606262 153.429706,36.9498999 153.336798,37.7391736 C153.290345,38.0979343 153.336798,38.4566951 153.383252,38.8154558 C153.522614,39.5688534 154.21942,39.8917381 155.148496,39.6047295 C155.613034,39.4612252 156.077572,39.2459687 156.449202,38.9589601 C157.331824,38.3849429 158.028631,37.6674214 158.678984,36.9498999 C160.862312,34.617955 162.534648,32.1066297 163.928262,29.4518001 C164.114077,29.1289154 164.021169,28.913659 163.742447,28.6984025 C162.813371,27.9091289 161.930749,27.0481031 161.187488,26.1512012 C160.258413,25.0390428 159.468698,23.8551323 159.050614,22.5635936 C158.539623,21.0567985 158.678984,19.5858794 159.840329,18.2225885 C160.304866,17.6844474 160.908766,17.2898105 161.744934,17.1104302 C162.813371,16.8951737 163.695993,17.1463062 164.439254,17.7203234 C164.996699,18.1508363 165.414783,18.6531014 165.73996,19.2271186 C166.576128,20.6621616 166.808397,22.1330807 166.669035,23.675752 C166.576128,24.5726539 166.390313,25.4336797 166.158044,26.2947055 C166.065136,26.6175902 166.158044,26.8328466 166.436766,27.0839791 C167.180027,27.8015006 167.923288,28.5548982 168.666548,29.2724197 C168.945271,29.5594283 169.223994,29.9181891 169.502716,30.2410738 C169.642078,30.2051977 169.734985,30.1693216 169.827893,30.1334456 C171.407322,29.5235523 173.079658,29.2006676 174.891356,29.1647915 C175.30944,29.1647915 175.727524,29.1289154 176.099154,29.0930394 C176.238515,29.0930394 176.424331,29.0212872 176.563692,28.9854111 C176.749507,28.913659 176.935322,28.9495351 176.981776,29.0930394 C177.02823,29.1647915 176.981776,29.3441719 176.888868,29.380048 C176.703053,29.4876762 176.470784,29.5235523 176.284969,29.5594283 C175.448801,29.6311805 174.566179,29.7029326 173.730011,29.7746848 C172.61512,29.9181891 171.546683,30.1693216 170.571153,30.5280824 C170.385338,30.5998345 170.199523,30.6715867 169.9208,30.7792149 C170.199523,31.1738517 170.478246,31.5326125 170.710515,31.8913732 C171.63959,33.3264163 172.382851,34.8332114 172.522212,36.4476348 C172.568666,37.3086606 172.475759,38.1338104 171.918313,38.923084 C171.128599,40.1069945 169.131086,40.8962682 167.412296,40.6810117 C166.48322,40.5733835 165.786413,40.1069945 165.228968,39.5329773 C164.439254,38.7078276 164.253438,37.7750496 164.253438,36.7705195 C164.253438,34.9767157 165.182514,33.5057966 166.529674,32.1066297 C166.576128,32.0707536 166.622581,31.9990015 166.715489,31.9272493 C166.11159,31.2456039 165.461237,30.5280824 164.810884,29.7746848 C164.717976,29.9540652 164.625069,30.0258173 164.578615,30.0975695 C163.649539,31.9631254 162.441741,33.685177 161.048127,35.3713526 C160.211959,36.4476348 159.329337,37.488041 158.400261,38.4925711 C157.88927,39.0665883 157.28537,39.5688534 156.681471,40.0711185 C155.845303,40.6810117 154.869773,41.0038964 153.708429,40.8962682 C152.686445,40.78864 151.896731,40.4298792 151.292832,39.7841099 C150.596025,39.0307123 150.270849,38.2055625 150.177941,37.3086606 C149.945672,35.7301133 150.177941,34.151566 150.41021,32.6088948 C150.642479,31.1738517 150.874748,29.7388087 150.735386,28.2678896 C150.688933,27.4068638 150.41021,26.545838 149.620495,25.9000686 C149.43468,25.7565643 149.202411,25.61306 148.970142,25.5413079 C148.180428,25.3260514 147.390714,25.2901754 146.554546,25.2184232 C146.461638,25.7206883 146.36873,26.2229533 146.275823,26.6893423 C145.904193,28.3396418 145.25384,29.882313 144.417671,31.4249843 C143.581503,32.9676555 142.513066,34.4385746 141.119452,35.7659894 C140.283284,36.5552631 139.400662,37.3086606 138.285771,37.7750496 C136.845704,38.3849429 135.45209,38.2773147 134.058477,37.5956692 C132.618409,36.8781477 131.735788,35.8018655 131.038981,34.617955 C130.342174,33.3264163 130.016997,31.9272493 129.831182,30.5280824 C129.55246,28.4113939 129.598913,26.2588294 129.877636,24.1421409 C129.970544,23.2452391 130.063451,22.3483372 130.202813,21.4514353 C130.435082,20.0881444 130.713804,18.6889775 130.992527,17.3256866 C131.224796,16.3211565 131.457065,15.2807503 131.689334,14.2762202 C131.968056,13.0205576 132.293233,11.800771 132.571956,10.5451083 C132.664863,10.0787194 132.804225,9.61233038 132.897132,9.1459414 C132.943586,9.03831318 132.943586,8.89480887 132.850678,8.75130457 C132.571956,9.11006533 132.246779,9.46882608 131.968056,9.82758684 C130.481535,11.5855145 128.995014,13.3793183 127.508493,15.137246 C126.718779,16.070024 125.789703,16.9310498 124.628358,17.6485713 C124.256728,17.8997038 123.838644,18.1149603 123.374106,18.2943406 C122.166307,18.7966057 120.958509,18.7966057 119.704257,18.3302167 C118.775181,17.971456 117.939013,17.4691909 117.242206,16.8951737 C115.616324,15.5318828 114.59434,13.9533355 113.572357,12.303036 C112.643281,10.7962409 112.039382,9.21769355 111.389029,7.60327016 C111.203214,7.13688118 111.063852,6.63461612 110.831583,6.13235106 C110.738676,6.38348359 110.692222,6.63461612 110.599315,6.88574865 C109.902508,10.1863476 109.019886,13.4151944 107.997902,16.6440412 C106.511381,21.307931 104.606776,25.8641926 102.191179,30.2769499 C101.029834,32.3936383 99.6826746,34.4744507 97.9638845,36.3758827 C96.8489936,37.6315453 95.5018338,38.7078276 93.7830437,39.4612252 C91.2745392,40.6092596 88.6266733,40.78864 85.9323537,39.8917381 C83.8883871,39.2100926 82.1231432,38.2414386 80.5901682,37.021652 C79.8004538,36.3758827 79.0571932,35.6942372 78.3139327,35.0125918 C78.1745713,34.9049636 78.0816637,34.7973354 77.9423024,34.6538311 C77.5706721,35.0484679 77.2454956,35.4072286 76.920319,35.7659894 C75.851882,36.8781477 74.8298986,38.0261822 73.5756464,39.0307123 C72.6465707,39.7841099 71.5781336,40.4298792 70.2774275,40.7527639 C67.6295617,41.4702854 65.167511,40.5733835 63.8668049,38.7437037 C63.1699981,37.7750496 62.7519141,36.6987674 62.5660989,35.6224851 C62.4267375,34.7973354 62.3802838,33.9721856 62.2873762,33.1470359 C62.1944686,31.6761168 62.1480148,30.1693216 61.9621997,28.6984025 C61.9157459,28.1602614 61.683477,27.6221203 61.4047542,27.1198552 C61.0795777,26.545838 60.4292247,26.1512012 59.7324179,25.8283165 C58.9427035,25.4336797 58.0600816,25.2901754 57.1774596,25.1466711 C56.7593756,25.0749189 56.3877453,25.0390428 55.9232074,24.9672907 C55.9232074,25.1466711 55.9232074,25.3260514 55.9696612,25.4695557 C56.1554763,28.9495351 55.4586695,32.2860101 53.600518,35.4431047 C53.3217953,35.9094937 52.9966188,36.3400066 52.6249885,36.7346434 C51.2778287,38.2055625 49.3267697,38.5284472 47.282803,37.7032975 C46.4930887,37.3804128 45.7962819,36.9498999 45.1923826,36.4476348 C43.2877774,34.9049636 42.1264327,33.0752837 41.3367183,31.1020996 C40.6863653,29.5235523 40.3611888,27.9091289 40.2218274,26.2947055 C40.1289199,25.0749189 39.9895585,23.8551323 39.9895585,22.6353458 C39.9895585,21.0926745 40.1289199,19.5500033 40.2218274,18.007332 C40.2682812,17.0745541 40.3611888,16.1417761 40.5005501,15.2089982 C40.5934577,14.3479723 40.7328191,13.4869465 40.8257267,12.6259207 C40.965088,11.6572667 41.1044494,10.6886126 41.2438107,9.71995861 C41.3367183,9.1459414 41.4296259,8.57192419 41.5225335,7.99790699 C41.5225335,7.89027876 41.5225335,7.78265053 41.4760797,7.67502231 C41.197357,8.06965914 40.965088,8.50017204 40.6863653,8.89480887 C38.9211214,11.6931428 37.1558775,14.4556006 35.3906336,17.2180584 C34.6938268,18.3302167 33.8576586,19.3706229 33.0214905,20.4469052 C32.7427677,20.8056659 32.3246837,21.1644267 31.9065996,21.4514353 C31.1168852,21.9895764 30.3271708,22.0254525 29.4445489,21.6308157 C28.6548345,21.2720549 28.0509353,20.7339138 27.447036,20.1957726 C26.5179603,19.3347468 25.7282459,18.4019689 25.1243467,17.3615627 C24.613355,16.5364129 24.1488172,15.7112632 23.7307331,14.8861135 C23.0339263,13.3434422 22.4764808,11.800771 21.9654892,10.2222237 C21.779674,9.61233038 21.5938589,9.03831318 21.3151362,8.42841989 C21.2222286,9.11006533 21.1757748,9.79171076 21.0828672,10.5092323 C20.6183294,15.0654939 19.9215226,19.6217554 18.8530855,24.1062649 C18.29564,26.4023337 17.645287,28.7342786 16.7162113,30.9585953 C16.0658583,32.4653905 15.2761439,33.9004335 14.161253,35.2278483 C13.6038076,35.9094937 12.9534545,36.519387 12.1172864,37.021652 C10.9094879,37.7750496 9.5623281,38.0261822 8.02935313,37.8109257 C6.07829408,37.5239171 4.54531912,36.7346434 3.24461308,35.586609 C1.34000782,33.9004335 0.457385872,31.8554972 0.0857555771,29.6670566 C-0.0536057834,28.7701547 -0.0536057834,27.8732528 0.318024511,26.9763509 C0.829016167,25.61306 1.94390705,24.644406 3.61624338,23.9627606 C5.66021,23.1376108 7.75063041,23.1376108 9.84105082,23.9268845 C10.8630341,24.3215213 11.6062947,24.9672907 12.1172864,25.7565643 C12.1172864,25.7924404 12.1637402,25.7924404 12.1637402,25.8283165 C12.2566477,26.0076969 12.2566477,26.1870772 12.0243788,26.2947055 C11.8385637,26.4023337 11.6527485,26.3305816 11.4669334,26.1870772 C11.2346644,26.0076969 11.0488493,25.8283165 10.8165803,25.6848122 C9.65523567,24.8596625 8.30807585,24.4650256 6.77510089,24.4291496 C5.70666379,24.3932735 4.77758805,24.7520342 3.8949661,25.1825471 C2.45489871,25.8641926 1.80454569,26.9404748 1.7580919,28.2320136 C1.71163812,29.3082958 2.03681463,30.3845781 2.50135249,31.3891082 C2.96589036,32.4653905 3.61624338,33.4699206 4.5917729,34.3668225 C5.66021,35.3713526 6.91446225,36.1965023 8.54034479,36.5552631 C9.60878188,36.8063956 10.6307652,36.6628913 11.5598409,36.1606262 C12.3495553,35.7301133 12.9999083,35.1560961 13.5109,34.5462028 C14.4864295,33.4340445 15.1367825,32.2142579 15.694228,30.9585953 C16.5303961,28.9854111 17.1807491,26.9763509 17.6917408,24.9314146 C18.4350014,22.1330807 18.9924468,19.3347468 19.5034385,16.5364129 C19.9679764,13.8098312 20.3396066,11.0832495 20.5718756,8.32079167 C20.6183294,7.67502231 20.6647832,6.99337687 20.7112369,6.34760752 C20.7576907,5.66596208 20.5254218,5.0560688 20.3860604,4.37442336 C20.2466991,3.65690186 20.1537915,2.93938035 20.2466991,2.18598276 C20.3396066,1.71959378 20.7112369,1.36083303 21.2686824,1.28908087 C21.8261278,1.21732872 22.3371195,1.3967091 22.662296,1.82722201 C23.1268339,2.40123921 23.3591028,3.0111325 23.5449179,3.62102578 C23.8700945,4.66143197 24.195271,5.70183816 24.5204475,6.74224435 C24.9849853,8.21316344 25.4495232,9.64820646 25.9140611,11.1191256 C26.2856914,12.303036 26.7502292,13.4510705 27.3076747,14.5632288 C28.1438428,16.2852804 28.980011,18.007332 29.862633,19.7293837 C30.0019943,20.0163923 30.2342633,20.3392769 30.4665322,20.5904095 C30.6523473,20.841542 30.8381625,20.841542 31.163339,20.6980377 C31.6743306,20.4469052 32.0459609,20.1240205 32.3246837,19.7293837 C33.346667,18.5454732 34.1828351,17.2539345 35.0190033,15.9623957 C37.2952389,12.4465403 39.5714744,8.93068495 41.84771,5.41482955 C42.0799789,5.0560688 42.1728865,4.69730804 42.3587016,4.33854729 C42.498063,4.01566261 42.5909706,3.69277793 42.7767857,3.36989325 C43.0090546,2.90350427 43.4271387,2.68824782 43.9845842,2.72412389 C44.5420296,2.75999997 44.9601137,3.04700857 45.099475,3.51339755 C45.2852902,4.05153869 45.331744,4.62555589 45.2388364,5.16369703 C45.099475,6.41935967 44.9136599,7.67502231 44.7278448,8.93068495 C44.6349372,9.57645431 44.5420296,10.2580997 44.449122,10.9038691 C44.2633069,12.1236557 44.0774917,13.3075662 43.9381304,14.5273527 C43.798769,15.8547675 43.6594077,17.1821823 43.5665001,18.5095971 C43.4735925,19.3706229 43.3806849,20.2316487 43.3806849,21.0926745 C43.3342311,23.0658587 43.3806849,25.0390428 43.7058614,27.012227 C43.9845842,28.7342786 44.4955758,30.4204542 45.0530213,32.1066297 C45.4246516,33.182912 45.982097,34.2233182 46.63245,35.2278483 C47.0505341,35.8377416 47.515072,36.4117588 48.2118788,36.8781477 C49.1409545,37.5239171 50.1629378,37.5597932 51.1384673,36.9498999 C51.3242825,36.8422717 51.5100976,36.6987674 51.6959128,36.519387 C52.299812,36.0171219 52.7178961,35.4431047 53.0430726,34.8332114 C53.8792408,33.3981684 54.3437786,31.8554972 54.7154089,30.2769499 C55.0405854,28.7701547 55.1799468,27.2274834 55.0870392,25.6848122 C55.0870392,25.3978036 55.0405854,25.0749189 54.9941317,24.7879103 C54.2044173,24.6085299 53.4147029,24.4650256 52.6714423,24.2856452 C50.7203833,23.7833802 49.2803159,22.8147262 48.4906015,21.3438071 C48.1189712,20.6621616 48.0725174,19.9805162 48.5370553,19.2988708 C49.0945007,18.5095971 50.1629378,18.1508363 51.2778287,18.473721 C52.0675431,18.6889775 52.7178961,19.1194904 53.2753415,19.5858794 C54.4366862,20.6621616 55.133493,21.9178243 55.5980309,23.2811151 C55.6444847,23.4604955 55.6909385,23.6398759 55.783846,23.8551323 C56.1554763,23.8910084 56.5271066,23.9268845 56.8522831,23.9268845 C58.0136278,24.0345127 59.1749725,24.0703888 60.2898634,24.2138931 C61.7299307,24.3932735 62.984183,24.8955385 64.0061663,25.7206883 C64.7029731,26.2947055 65.0281496,27.012227 65.2604185,27.8015006 C65.6785026,29.0930394 65.6320488,30.4563302 65.6785026,31.783745 C65.7249564,33.685177 65.9107716,35.586609 66.5611246,37.4521649 C66.7469397,37.9185539 66.9792087,38.3849429 67.2579314,38.8154558 C67.768923,39.6047295 68.7909063,39.9634902 69.9057972,39.7482338 C70.9277805,39.5688534 71.7174949,39.1383405 72.4607555,38.5643233 C73.7150078,37.6315453 74.7369911,36.5911391 75.7589744,35.5507329 C76.269966,35.0125918 76.7809577,34.4744507 77.2919493,33.9363096 C76.9667728,33.5057966 76.6415963,33.1111598 76.3164198,32.716523 C75.5731592,31.7119929 74.8763524,30.7074628 74.3653608,29.6311805 C73.8079153,28.3755179 73.2040161,27.1557313 72.6930244,25.9000686 C72.3213942,25.0031668 72.0891252,24.1062649 71.8104025,23.1734869 C71.5316798,22.0613286 71.2529571,20.9850463 71.0671419,19.872888 C70.9277805,19.0477382 70.9277805,18.2584646 70.834873,17.4333148 C70.6955116,16.4646608 70.7884192,15.5318828 70.9277805,14.5632288 C71.1135957,13.3075662 71.3923184,12.0877796 71.9033101,10.9038691 C72.2284866,10.1863476 72.6465707,9.54057823 73.3898312,9.07418925 C74.5511759,8.32079167 75.8983357,8.14141129 77.2919493,8.42841989 C79.5217311,8.89480887 81.1011599,9.97109114 82.2160508,11.4778863 C82.3089583,11.6213906 82.4483197,11.7648949 82.5412273,11.9442753 C82.5412273,11.9801514 82.587681,11.9801514 82.6805886,11.9801514 C82.7270424,11.6213906 82.81995,11.2626299 82.8664038,10.9038691 C83.0522189,9.93521506 83.3773954,8.96656102 84.0277484,8.10553521 C84.3529249,7.63914623 84.771009,7.2445094 85.3749083,6.9575008 C86.3968916,6.41935967 87.7440514,6.49111182 88.7660347,7.1010051 C89.8344718,7.78265053 90.4848248,8.67955242 90.7170937,9.71995861 C90.9493627,10.8321169 90.8100013,11.9083992 90.5777324,13.0205576 C89.9738332,15.603635 88.9053961,18.0790842 87.60469,20.4827813 C85.6071772,24.3215213 83.0057651,27.980881 80.2649917,31.5326125 C79.9398152,31.9272493 79.6610925,32.3218862 79.335916,32.6806469 C79.1965546,32.8241512 79.1965546,32.9317794 79.2894622,33.1111598 C80.4043531,34.5820789 81.6586053,35.9812459 83.2380341,37.2010324 C84.2600174,37.95443 85.3749083,38.6001994 86.6291605,39.0665883 C89.0447574,39.9634902 91.3674468,39.855862 93.5507747,38.7078276 C95.1766573,37.8468018 96.4309095,36.6628913 97.4993466,35.4072286 C99.4504057,33.1470359 100.890473,30.7074628 102.144725,28.1961375 C103.724154,25.1466711 105.02486,22.0254525 106.093297,18.8324818 C106.697196,17.1104302 107.161734,15.3525025 107.626272,13.5945748 C108.137264,11.6572667 108.648255,9.68408253 109.06634,7.71089838 C109.391516,6.23997929 109.623785,4.7690602 109.902508,3.2981411 C109.948962,2.90350427 109.856054,2.47299137 109.8096,2.04247846 C109.8096,1.6837177 109.763146,1.32495695 109.8096,0.966196196 C109.856054,0.53568329 110.134777,0.212798611 110.692222,0.0692943088 C111.249668,-0.074209993 111.760659,-0.0024578421 112.085836,0.356302913 C112.411012,0.715063667 112.736189,1.07382442 112.87555,1.46846125 C113.200727,2.32948706 113.432996,3.19051287 113.711718,4.05153869 C113.943987,4.7690602 114.129802,5.52245778 114.408525,6.20410321 C114.780155,7.20863333 115.151786,8.21316344 115.662777,9.18181748 C116.220223,10.3298519 116.824122,11.4778863 117.474475,12.5900446 C117.985467,13.4510705 118.496458,14.3120963 119.053904,15.137246 C119.471988,15.7830154 120.029433,16.3570326 120.72624,16.8234216 C121.469501,17.2898105 122.305669,17.3615627 123.188291,17.038678 C124.16382,16.6799173 124.907081,16.1059 125.51098,15.4601307 C126.440056,14.4914766 127.322678,13.5228226 128.2053,12.5182925 C129.970544,10.4733562 131.64288,8.35666774 133.175855,6.20410321 C133.315216,6.02472284 133.408124,5.80946638 133.454578,5.59420993 C133.7333,4.7690602 134.058477,3.94391046 134.523015,3.1546368 C134.70883,2.8676282 134.941099,2.61649567 135.173368,2.36536314 C135.498544,2.07835454 135.916628,1.97072631 136.42762,2.07835454 C136.938612,2.18598276 137.217334,2.47299137 137.263788,2.8676282 C137.310242,3.19051287 137.356696,3.51339755 137.263788,3.80040616 C137.077973,4.80493627 136.79925,5.77359031 136.566981,6.77812042 C136.42762,7.3880137 136.288259,7.99790699 136.148897,8.60780027 C135.870175,9.82758684 135.591452,11.0473734 135.312729,12.303036 C134.987553,13.702203 134.662376,15.0654939 134.383653,16.4646608 C134.058477,18.0432081 133.686847,19.5858794 133.408124,21.1644267 C133.175855,22.4918415 132.99004,23.8551323 132.943586,25.1825471 C132.850678,26.9404748 132.804225,28.6984025 132.850678,30.4563302 C132.897132,32.0348776 133.082947,33.5775488 133.779754,35.0484679 C134.058477,35.6224851 134.430107,36.1247502 135.034006,36.5552631 C135.823721,37.0934042 136.659889,37.2010324 137.542511,36.7705195 C138.099956,36.519387 138.610948,36.1965023 139.075486,35.8377416 C140.469099,34.7614593 141.491083,33.4340445 142.373705,32.0707536 C143.395688,30.5280824 144.185402,28.913659 144.64994,27.1916074 C144.835755,26.5099619 144.928663,25.7924404 145.021571,25.110795 C145.439655,25.1466711 145.439655,25.0749189 145.393201,25.0031668 Z M78.8249243,32.2142579 C79.0107395,32.0348776 79.103647,31.9631254 79.1501008,31.8554972 C80.3114455,30.3128259 81.4727902,28.7701547 82.587681,27.1916074 C84.6316477,24.3215213 86.3968916,21.3438071 87.7440514,18.2584646 C88.6266733,16.2852804 89.4163877,14.2762202 89.7415642,12.1954078 C89.8809256,11.3702581 89.9273794,10.5092323 89.6951104,9.68408253 C89.5557491,9.0024371 89.0912112,8.42841989 88.3479506,7.99790699 C87.6975976,7.60327016 87.1401522,7.63914623 86.5827067,8.10553521 C86.2575302,8.39254382 85.9788075,8.7154285 85.8394461,9.03831318 C85.4678158,9.86346291 85.1890931,10.7244887 84.9103704,11.5496385 C84.6781015,12.2312839 84.4922863,12.8770533 84.2600174,13.5586987 C84.1671098,13.8098312 84.0277484,14.0609637 83.7954795,14.2762202 C83.470303,14.5991049 83.0057651,14.5273527 82.7270424,14.204468 C82.6341348,14.0968398 82.587681,13.9533355 82.5412273,13.8457073 C82.4483197,13.5586987 82.3089583,13.2716901 82.2160508,12.9846815 C81.7050591,11.7290188 80.8224371,10.6886126 79.3823698,9.93521506 C78.5462016,9.50470216 77.5706721,9.25356963 76.5486888,9.25356963 C75.4802517,9.25356963 74.7369911,9.61233038 74.318907,10.401604 C74.2259994,10.5809844 74.1330918,10.7603648 74.0866381,10.9397452 C73.7614615,11.7648949 73.7150078,12.5900446 73.6221002,13.4510705 C73.4827388,15.4601307 73.6221002,17.505067 74.0401843,19.4782511 C74.3653608,21.2361788 74.7834449,22.9941065 75.3408903,24.7161582 C75.851882,26.4023337 76.502235,28.0167571 77.3384031,29.6311805 C77.8493948,30.4204542 78.3139327,31.28148 78.8249243,32.2142579 Z M165.182514,25.8283165 C165.228968,25.8283165 165.275422,25.7924404 165.321875,25.7924404 C165.368329,25.5413079 165.414783,25.3260514 165.461237,25.0749189 C165.73996,23.6398759 165.73996,22.2048329 165.182514,20.7697899 C164.903791,19.9805162 164.532161,19.2629947 163.742447,18.6531014 C162.952732,18.0432081 162.023657,18.1508363 161.559119,18.94011 C161.512665,18.9759861 161.512665,19.0477382 161.466211,19.0836143 C160.955219,20.1957726 161.094581,21.307931 161.837841,22.3124611 C162.441741,23.1376108 163.185001,23.8910084 163.881808,24.6802821 C164.299892,25.0749189 164.76443,25.4336797 165.182514,25.8283165 Z M167.412296,32.6088948 C167.319388,32.6447708 167.272934,32.6806469 167.226481,32.6806469 C165.925775,34.0080617 165.275422,35.4431047 165.554144,37.0934042 C165.693506,37.8109257 166.018682,38.4925711 166.761943,38.9589601 C167.319388,39.3177209 167.969741,39.3535969 168.573641,39.0665883 C168.945271,38.887208 169.270447,38.6360754 169.502716,38.3490668 C169.9208,37.8468018 169.874347,37.3086606 169.734985,36.7705195 C169.409809,35.586609 168.759456,34.5103268 168.016195,33.4340445 C167.83038,33.182912 167.598111,32.8959034 167.412296,32.6088948 Z M145.393201,24.0703888 C145.439655,23.9986366 145.439655,23.9627606 145.439655,23.9268845 C145.439655,22.9582305 145.300293,22.0254525 144.882209,21.0926745 C144.603487,20.5186573 144.138949,20.0163923 143.535049,19.5858794 C142.93115,19.1912425 142.280797,19.2271186 141.816259,19.6935076 C141.630444,19.908764 141.444629,20.1240205 141.351721,20.375153 C140.84073,21.9178243 141.58399,23.1734869 143.627957,23.8192563 C144.185402,24.0345127 144.789302,24.1062649 145.393201,24.0703888 Z M54.9941317,23.7475041 C54.7154089,23.1734869 54.5295938,22.6353458 54.2973248,22.1689568 C53.832787,21.307931 53.2288877,20.4827813 52.3462658,19.8370119 C51.9746355,19.5500033 51.5565514,19.3347468 50.999106,19.2629947 C50.5345681,19.1912425 50.1629378,19.2988708 49.9771227,19.6217554 C49.8377613,19.8011358 49.7448537,19.9805162 49.7448537,20.1957726 C49.6983999,20.841542 49.9771227,21.3796831 50.4416605,21.8819482 C51.4636438,23.0299826 53.0430726,23.4963716 54.9941317,23.7475041 Z' id='Shape' fill='#000000' />
              </g>
            </g>
          </svg>
        </div>
        <div className='about'>
          <section className='about-groom'>
            <article className='about-details'>
              <h1>{Data.he}</h1>
              <h1>{Data.proposed}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <div className='placeholder' />
          </section>
          <section className='about-bride'>
            <div className='placeholder' />
            <article className='about-details'>
              <h1>{Data.she}</h1>
              <h1>{Data.said} <span className='about-yes'>{Data.yes}
                <svg width='40px' height='45px' viewBox='0 0 40 45' version='1.1'>
                  <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g id='if_Artboard_1460_2884803' fill='#F7D0CB' fillRule='nonzero'>
                      <path d='M28.6962828,6 L8.31451264,6 C8.16759354,6.00037331 8.02725105,6.04060464 7.9258772,6.11140832 L3.15429753,9.44287643 C2.94856749,9.58261967 2.94856749,9.80626755 3.15429753,9.94601078 L18.12216,19.8936955 C18.223511,19.961731 18.3614744,20 18.5053977,20 C18.649321,20 18.7872844,19.961731 18.8886354,19.8936955 L33.8457025,9.94601078 C34.0514325,9.80626755 34.0514325,9.58261967 33.8457025,9.44287643 L29.0849182,6.11140832 C28.9835444,6.04060464 28.8432019,6.00037331 28.6962828,6 Z M32.2047972,9.33146811 L25.6249832,9.33146811 L21.884367,6.71876335 L28.4641811,6.71876335 L32.2047972,9.33146811 Z M20.3945978,6.71876335 L24.135214,9.33146811 L12.8755814,9.33146811 L16.6215953,6.71876335 L20.3945978,6.71876335 Z M24.5994174,10.0502315 L18.5053977,18.5783586 L12.411378,10.0502315 L24.5994174,10.0502315 Z M11.2130854,10.0502315 L16.9778445,18.1147562 L4.8491799,10.0502315 L11.2130854,10.0502315 Z M25.7869146,10.0502315 L32.1616155,10.0502315 L20.0329509,18.11835 L25.7869146,10.0502315 Z M8.51422808,6.71876335 L15.1264284,6.71876335 L11.3858122,9.33146811 L4.80599819,9.33146811 L8.51422808,6.71876335 Z' id='Shape' />
                      <path d='M20,45 C29.3694806,44.9874376 37.4753235,40.5210135 39.5166801,34.2460572 C41.5580368,27.9711008 36.9898104,21.5631936 28.5176248,18.8175474 L30.2346164,17.6393371 C30.425268,17.4865701 30.4124498,17.2588467 30.2051937,17.1166263 C29.9979376,16.9744059 29.6660791,16.9656099 29.4434536,17.0964362 L20,23.5611918 L10.5565464,17.0925859 C10.3339209,16.9617595 10.0020624,16.9705555 9.79480631,17.1127759 C9.58755025,17.2549963 9.57473199,17.4827197 9.76538359,17.6354867 L11.4823752,18.8175474 C3.0101896,21.5631936 -1.55803681,27.9711008 0.483319853,34.2460572 C2.52467651,40.5210135 10.6305194,44.9874376 20,45 Z M20,24.4775776 C20.1499539,24.4771505 20.2934196,24.4355531 20.3983869,24.3620668 L25.2744185,21.0199537 C32.5336723,22.7825317 36.8870674,27.8771994 35.5839818,33.0849739 C34.2808962,38.2927484 27.7002848,42.0991386 20,42.0991386 C12.2997152,42.0991386 5.71910381,38.2927484 4.4160182,33.0849739 C3.11293259,27.8771994 7.46632768,22.7825317 14.7255815,21.0199537 L19.6016131,24.3620668 C19.7027407,24.4412448 19.8467065,24.4885528 20,24.4929791 L20,24.4775776 Z M12.3240377,19.3912512 L13.8278081,20.4385493 C6.23797271,22.4685152 1.82981187,27.9189805 3.33484472,33.4125615 C4.83987758,38.9061425 11.8315866,42.8859904 19.9775557,42.8859904 C28.1235247,42.8859904 35.1152338,38.9061425 36.6202666,33.4125615 C38.1252995,27.9189805 33.7171386,22.4685152 26.1273032,20.4385493 L27.653518,19.3912512 C35.8258475,21.8795038 40.3459626,27.9526567 38.4926582,33.954543 C36.6393538,39.9564293 28.9182252,44.2496892 19.9775557,44.2496892 C11.0368861,44.2496892 3.31575758,39.9564293 1.46245317,33.954543 C-0.390851247,27.9526567 4.12926388,21.8795038 12.3015934,19.3912512 L12.3240377,19.3912512 Z' id='Shape' />
                      <path d='M20.7500188,3 C21.164222,3 21.5,2.83778433 21.5,2.63768116 L21.5,0.362318841 C21.5,0.16221567 21.164222,0 20.7500188,0 C20.3358156,0 20.0000376,0.16221567 20.0000376,0.362318841 L20.0000376,2.63405797 C19.9980354,2.73077713 20.0761663,2.82386788 20.2170327,2.8926015 C20.357899,2.96133511 20.5498051,3.00000484 20.7500188,3 Z' id='Shape' />
                      <path d='M34.4059845,5.99998557 C34.4769698,5.99891765 34.5465018,5.97071501 34.6075487,5.91822977 L36.7965359,4.09040363 C36.8898358,4.01334807 36.9580532,3.88554754 36.9860553,3.73535199 C37.0140574,3.58515644 36.9995292,3.42498366 36.9456934,3.29036471 C36.8918242,3.15620101 36.8033015,3.058621 36.6996762,3.01917571 C36.5960508,2.97973042 36.4858483,3.00166515 36.3934075,3.0801355 L34.2044203,4.90796165 C34.0446957,5.03907349 33.9662971,5.30995551 34.0137185,5.5668726 C34.0611399,5.82378969 34.2224027,6.00184489 34.4059845,5.99998557 Z' id='Shape' />
                      <path d='M3.20352897,4.09099812 L5.3932141,5.91982081 C5.4856844,5.99833395 5.59592202,6.02028063 5.69958042,5.98081384 C5.80323883,5.94134704 5.89178969,5.84371383 5.9456761,5.70947699 C5.99952905,5.57478464 6.0140619,5.41452453 5.98605085,5.26424709 C5.95803979,5.11396965 5.8898007,4.98609945 5.79647103,4.90900188 L3.6067859,3.08017919 C3.5143156,3.00166605 3.40407798,2.97971937 3.30041958,3.01918616 C3.19676117,3.05865296 3.10821031,3.15628617 3.0543239,3.29052301 C3.00047095,3.42521536 2.9859381,3.58547547 3.01394915,3.73575291 C3.04196021,3.88603035 3.1101993,4.01390055 3.20352897,4.09099812 Z' id='Shape' />
                      <path d='M10.9115625,5.7982109 C11.0162851,5.9235741 11.210135,6.00057149 11.4195819,5.99999681 C11.6275713,5.99913215 11.8191945,5.92187025 11.922647,5.79716251 C12.0260995,5.67245476 12.0257624,5.51912899 11.9217621,5.3946391 L10.0940599,3.2032442 C9.93281195,3.0093329 9.57464662,2.94247935 9.29407522,3.05392263 C9.01350382,3.16536591 8.91677304,3.4129047 9.07802097,3.606816 L10.9115625,5.7982109 Z' id='Shape' />
                      <path d='M29.2907595,5.94748102 C29.3798792,5.98237164 29.4807046,6.00047904 29.5831414,5.99999036 C29.7928873,6.00056555 29.9870139,5.9235021 30.091886,5.79803134 L31.9221971,3.60475635 C32.0818857,3.41274455 31.9879874,3.16772156 31.7116821,3.0554278 C31.5775907,3.00115174 31.4177348,2.98598002 31.2674195,3.01326338 C31.1171042,3.04054674 30.9886964,3.10804049 30.9105555,3.2008383 L29.0802444,5.39411329 C29.0016674,5.4867352 28.9797029,5.59715354 29.0192018,5.70098189 C29.0587007,5.80481024 29.1564134,5.89350627 29.2907595,5.94748102 Z' id='Shape' />
                      <path d='M15.3669498,2.72620771 C15.4656778,2.89228076 15.8047969,3.00566791 16.1851549,2.99978108 L16.3978882,2.99978108 C16.6073829,2.97386097 16.7854703,2.91136677 16.8929044,2.82607064 C17.0003385,2.74077451 17.0283018,2.63967711 16.9706318,2.54505777 L15.6205934,0.297319793 C15.5610147,0.162491598 15.3407615,0.0537397572 15.0488034,0.0149938494 C14.7568453,-0.0237520583 14.4414165,0.013909139 14.2299324,0.112764453 C14.0184482,0.211619767 13.9458478,0.35533741 14.0414575,0.485863603 L15.3669498,2.72620771 Z' id='Shape' />
                      <path d='M26.5892925,2.99978108 L26.8031631,2.99978108 C27.1855545,3.00566791 27.5264866,2.89228076 27.6257424,2.72620771 L28.9583208,0.485863603 C29.0544417,0.35533741 28.9814532,0.211619767 28.7688384,0.112764453 C28.5562236,0.013909139 28.2391085,-0.0237520583 27.9455896,0.0149938494 C27.6520707,0.0537397572 27.4306399,0.162491598 27.3707428,0.297319793 L26.0381643,2.53396696 C25.9717014,2.62858222 25.9926492,2.73123323 26.0962971,2.81883659 C26.1999451,2.90643995 26.3775929,2.97164218 26.5892925,2.99978108 Z' id='Shape' />
                    </g>
                  </g>
                </svg></span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
          </section>
        </div>
        <section className='about-break'>
          <h1>We started our happily ever after on July 17, 2016...</h1>
        </section>
        <section className='about-story'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className='about-party'>
          <h3>The groomsmen</h3>
          <div className='about-images'>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={JamesImage} />
              </div>
              <div className='about-role'>
                <h4>Best Man</h4>
                <p>James Townsend</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={JoeImage} />
              </div>
              <div className='about-role'>
                <h4>Best Man</h4>
                <p>Joe Nalson</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={TJImage} />
              </div>
              <div className='about-role'>
                <h4>Groomsman</h4>
                <p>TJ Egan</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={BenImage} />
              </div>
              <div className='about-role'>
                <h4>Groomsman</h4>
                <p>Ben Woolsey</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={LewisImage} />
              </div>
              <div className='about-role'>
                <h4>Groomsman</h4>
                <p>Lewis Lines</p>
              </div>
            </div>
          </div>
          <h3>The bridesmaids</h3>
          <div className='about-images-2'>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={ShannelleImage} />
              </div>
              <div className='about-role'>
                <h4>Maid of Honor</h4>
                <p>Shannelle Lopez</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={MaddieImage} />
              </div>
              <div className='about-role'>
                <h4>Bridesmaid</h4>
                <p>Maddie Hald</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={MariImage} />
              </div>
              <div className='about-role'>
                <h4>Bridesmaid</h4>
                <p>Mari Johannessen</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={JenImage} />
              </div>
              <div className='about-role'>
                <h4>Bridesmaid</h4>
                <p>Jennifer Veatch</p>
              </div>
            </div>
            <div className='about-person'>
              <div className='about-circle'>
                <img src={EmilyImage} />
              </div>
              <div className='about-role'>
                <h4>Bridesmaid</h4>
                <p>Emily Dodson</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
