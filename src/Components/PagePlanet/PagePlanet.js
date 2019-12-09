import React from 'react';
import { Link } from 'react-router-dom';

import './PagePlanet.css';

import Planets from './Components/Planets';

import mercury from './Components/planets-textures/2k_mercury.jpg';
import venus from './Components/planets-textures/2k_venus_surface.jpg';
import earth from './Components/planets-textures/2k_earth_daymap.jpg';
import mars from './Components/planets-textures/2k_mars.jpg';
import jupiter from './Components/planets-textures/2k_jupiter.jpg';
// import saturn from './Components/planets-textures/2k_saturn.jpg';
import uranus from './Components/planets-textures/2k_uranus.jpg';
import neptune from './Components/planets-textures/2k_neptune.jpg';
import moon from './Components/planets-textures/2k_neptune.jpg';

const allPosts = [
  { name: 'Sun', step: "1", description: 'The Sun, or Sol,[15] is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,[16][17] with internal convective motion that generates a magnetic field via a dynamo process.[18] It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System.[19] Roughly three quarters of the Sun s mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.[20] The Sun is a G-type main-sequence star (G2V) based on its spectral class. As such, it is informally and not completely accurately referred to as a yellow dwarf (its light is closer to white than yellow). It formed approximately 4.6 billion[a][11][21] years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. It is thought that almost all stars form by this process.' },
	{ name: 'Mercury', step: "2", description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Like Venus, Mercury orbits the Sun within Earth s orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately every 116 days.'},
  { name: 'Venus', step: "3", description: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.[13][14] Venus lies within Earth's orbit, and so never appears to venture far from the Sun, setting in the west just after dusk and rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.[15] With a rotation period of 243 Earth days, it takes longer to rotate about its axis than any planet in the Solar System and goes in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east).[16] Venus does not have any natural satellites, a distinction it shares only with Mercury among planets in the Solar System.[17]. Venus is a terrestrial planet and is sometimes called Earth's "sister planet" because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth, or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far the hottest planet in the Solar System, with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past,[18][19] but these would have vaporized as the temperature rose due to a runaway greenhouse effect.[20] The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field.[21] Venus's surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism.`},
  { name: 'Earth', step: "4", description: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[23][24][25] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 6]. Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.[26] The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation.[27] Earth is the densest planet in the Solar System and the largest and most massive of the four rocky planets.[28]`},
	{ name: 'Mars', step: "5", description: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the Red Planet.[15][16] The latter refers to the effect of the iron oxide prevalent on Mars surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.[17] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.`},
	{ name: 'Jupiter', step: "6", description: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter has been known to astronomers since antiquity.[18] It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus. Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements,[21] but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator). The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century when it was first seen by telescope. Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere. Jupiter has 79 known moons,[22] including the four large Galilean moons discovered by Galileo Galilei in 1610. Ganymede, the largest of these, has a diameter greater than that of the planet Mercury.`},
	{ name: 'Saturn', step: "7", description: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.[14][15] It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.[16][17][18] Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle. Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's.[19] The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter, but not as high as those on Neptune.[20] In January 2019, astronomers reported that a day on the planet Saturn has been determined to be 10h 33m 38s + 1m 52s − 1m 19s , based on studies of the planet's C Ring.[8][9]`},
	{ name: 'Uranus', step: "8", description: `Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus' atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons.[14] It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.[14] The interior of Uranus is mainly composed of ices and rock.[13] `},
	{ name: 'Neptun', step: "9", description: `Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 au (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident. Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. The position of Neptune was subsequently calculated from Bouvard's observations, independently, by John Couch Adams and Urbain Le Verrier after his death. Neptune was subsequently observed with a telescope on 23 September 1846[1] by Johann Galle within a degree of the position predicted by Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the planet's remaining known 13 moons were located telescopically until the 20th century. The planet's distance from Earth gives it a very small apparent size, making it challenging to study with Earth-based telescopes. Neptune was visited by Voyager 2, when it flew by the planet on 25 August 1989.[14] The advent of the Hubble Space Telescope and large ground-based telescopes with adaptive optics has recently allowed for additional detailed observations from afar.`},
	{ name: 'Moon', step: "10", description: 'The Moon, occasionally distinguished as Luna, is an astronomical body that orbits the Earth as its only permanent natural satellite. It is the fifth-largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is, after Jupiter s satellite Io, the second-densest satellite in the Solar System among those whose densities are known.' }
];

function PagePlanet(props) {
	const params = props.match.params;
	const planet = () => {
		switch(params.name){
			case 'Sun':
				return 'sun'
			case 'Mercury':
				return <Planets texture={mercury} />
			case 'Moon':
				return <Planets texture={moon} />
			case 'Earth':
				return <Planets texture={earth} />
			case 'Venus':
				return <Planets texture={venus} />
			case 'Mars':
				return <Planets texture={mars} />
			case 'Jupiter':
					return <Planets texture={jupiter} />
			case 'Saturn':
				return 'saturn'
			case 'Uranus':
				return <Planets texture={uranus} />
			case 'Neptun':
				return <Planets texture={neptune} />
		}
	}
  const filteredPosts = allPosts.filter(
		post => post.name === params.name 
  );
		return (
			<section id="Page_planet_description" className={planet()}>
				<section className="ctn_planet_description">
					<header>
						<div className="ctn_item_top">
							<div className="ctn_counter">
								{
									filteredPosts.map(post => (<p>{post.step}</p>))
								}
								<span></span>
								<p>10</p>
							</div>
							<div>
								<Link to="/" className="btn">Back To</Link>
							</div>
						</div>
						{ 
							filteredPosts.map(post => (<h3>{post.name}</h3>))
						}
					</header>
					{
						filteredPosts.map(post => (<p>{post.description}</p>))
					}
					{
						planet()
					}
				</section>
			</section>
		);
}

export default PagePlanet;