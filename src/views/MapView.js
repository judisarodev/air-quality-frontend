import React from 'react';
import { Nav } from '../components/Nav';
import './../styles/mapview.css'
const MapView = () => {
    return(<div className='map-view'>
        <Nav />
        <div>
            
        </div>
        <div>
            <div>
                
            </div>
            <div>
                <iframe 
                title="Mapa de Bogotá con Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.47896915842!2d-74.18088298123638!3d4.67754289349356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c5fa5d2a31d%3A0xa5f9c78731920c46!2zRm9udGliw7NuLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1743989479647!5m2!1ses!2sco" 
                width="600" 
                height="450" 
                style={{border:0, pointerEvents: 'none'}} 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>)
    
}

export {MapView}