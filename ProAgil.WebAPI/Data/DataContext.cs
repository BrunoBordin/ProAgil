using Microsoft.EntityFrameworkCore;
using ProAgil.WebAPI.Model;

namespace ProAgil.WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> optinos): base (optinos){}
    
    public DbSet<Evento> Eventos {get; set;}
    
    }
}