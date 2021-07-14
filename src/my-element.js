import {LitElement, html} from 'lit-element';

export class MyElement extends LitElement {
    
    render() {
        return html `
            <script>
                
            </script>
            
            <p>Pokemons</p>
        `;
    }
        
}

customElements.define( 'my-element',MyElement );