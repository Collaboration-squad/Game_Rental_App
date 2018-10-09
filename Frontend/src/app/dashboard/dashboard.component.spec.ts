import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SnackBarComponent } from 'src/app/shared/snackBar/snackBar.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let GAMES;
    let mockSnackBar;

    beforeEach(() => {
        GAMES = [
            {
                position: 1,
                game: 'Hydrogen',
                type: 'card',
                numOfPlayers: 1,
                time: 15,
                available: 'Yes'
            },
            {
                position: 2,
                game: 'Helium',
                type: 'card',
                numOfPlayers: 4,
                time: 57,
                available: 'Yes'
            },
            {
                position: 3,
                game: 'Lithium',
                type: 'card',
                numOfPlayers: 6,
                time: 74,
                available: 'No'
            }
        ];

        mockSnackBar = jasmine.createSpyObj(['openFromComponent']);

        component = new DashboardComponent(mockSnackBar);
    });

    it('should show 10 games in the table', () => {
        component.dataSource = GAMES;

        expect(component.dataSource.length).toBe(3);
    });

    it('should open SnackBarComponent after given time', () => {
        component.rentGame();

        expect(mockSnackBar.openFromComponent).toHaveBeenCalledWith(SnackBarComponent, {
            duration: 1500
        });
    });
});
