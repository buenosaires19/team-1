//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace jpmapi
{
    using System;
    using System.Collections.Generic;
    
    public partial class photos
    {
        public int photo_id { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<int> profesional_id { get; set; }
        public string photo { get; set; }
    
        public virtual profesionals profesionals { get; set; }
    }
}
