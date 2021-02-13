from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Q, Count

from . import team_maker


def index(request):
    context = {
        "baseball_leagues": League.objects.filter(sport="Baseball"),
        "womens_leagues": League.objects.filter(name__contains="Women"),
        "sport_hockey": League.objects.filter(sport__contains="Hockey"),
        # "sport_not_soccer": League.objects.exclude(sport__icontains="Football", sport__icontains="Soccer"),
        "sport_not_soccer": League.objects.exclude(sport="Football") & League.objects.exclude(sport="Soccer"),
        "Conference_leagues": League.objects.filter(name__icontains="conference"),
        "atlantic_leagues": League.objects.filter(name__contains="atlantic"),
        "dallas_teams": Team.objects.filter(location="Dallas"),
        "raptor_teams": Team.objects.filter(team_name="Raptors"),
        "city_teams": Team.objects.filter(location__contains="City"),
        "t_teams": Team.objects.filter(team_name__startswith="T"),
        "az_teams": Team.objects.all().order_by("location"),
        "za_teams": Team.objects.all().order_by("-team_name"),
        "cooper_players": Player.objects.filter(last_name="Cooper"),
        "joshua_players": Player.objects.filter(first_name="Joshua"),
        "cooper_not_josh": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
        "alex_or_wyatt": Player.objects.filter(Q(first_name="Alexander") | Q(first_name="Wyatt")),
        # PARTE2#
        "ateams": Team.objects.filter(league__name='Atlantic Soccer Conference'),
        "Bplayers": Player.objects.filter(curr_team__team_name='Penguins'),
        "Iplayers": Player.objects.filter(curr_team__league_id=2),
        "Lplayers": Player.objects.filter(curr_team__league_id=7) & Player.objects.filter(last_name="Lopez"),
        "fplayers": Player.objects.filter(curr_team__league_id=7) | Player.objects.filter(curr_team__league_id=9),
        'fteams': Team.objects.filter(league__sport="Football"),
        'steams': Team.objects.filter(all_players__first_name="Sophia"),
        'sleague': League.objects.filter(teams__id=25) | League.objects.filter(teams__id=4) | League.objects.filter(teams__id=32),
        "notfplayers": Player.objects.filter(last_name='Flores') & Player.objects.filter(~Q(curr_team_id=10)),
        'seteams': Team.objects.filter(all_players__id=115),
        "maniplayers": Player.objects.filter(all_teams__id=4),
        "vikiplayers": Player.objects.filter(all_teams__id=40),
        'jacteams': Team.objects.filter(all_players__id=151)[:3],
        "atplayers": Player.objects.filter(first_name="Joshua") & Player.objects.filter(all_teams__league_id=3),
        "playerNums": Team.objects.annotate(nplayer=Count('all_players')).filter(nplayer__gt=12),
        "allplayerteam": Team.objects.annotate(nplayer=Count('all_players')).order_by('nplayer')
    }
    return render(request, "leagues/index.html", context)


def make_data(request):
    team_maker.gen_leagues(10)
    team_maker.gen_teams(50)
    team_maker.gen_players(200)

    return redirect("index")
