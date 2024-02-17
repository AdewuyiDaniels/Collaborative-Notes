// CollaborativeNotesApi/Startup.cs
using Microsoft.EntityFrameworkCore;

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

    // other configurations...
}
